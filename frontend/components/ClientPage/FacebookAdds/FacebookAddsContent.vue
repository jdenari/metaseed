<template>
    <div>
        <div class="p-3">
            <CalendarData
                :start-date="startDate"
                :end-date="endDate"
                @update:start-date="startDate = $event"
                @update:end-date="endDate = $event"
            />
            <div class="d-flex">
                <div class="m-1">
                    <h6 class="px-1">TIPO</h6>
                    <div class="d-flex">
                        <div v-for="(value, index) in distinctType" :key="'type-' + index">
                            <FilterButtonOutline
                            v-bind:FilterButtonOutlineText="value"
                            v-on:event="handleFilter(value)"
                            v-bind:isActive="filtersType[value]"
                            />
                        </div>
                    </div>
                </div>
                <div class="m-1">
                    <h6 class="px-1">CLASSE</h6>
                    <div class="d-flex">
                        <div v-for="(value, index) in distinctClass" :key="'class-' + index">
                            <FilterButtonOutline
                            v-bind:FilterButtonOutlineText="value"
                            v-on:event="handleFilter(value)"
                            v-bind:isActive="filtersClass[value]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isDataReady">
            <table class="table table-striped table-dist-content text-center m-3">
                <thead>
                    <tr>
                    <th v-for="(column, index) in headerTable01" :key="'header-' + index">{{ column }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, rowIndex) in dataTable" :key="'row-' + rowIndex">
                    <td v-for="(column, columnIndex) in columnsTable01" :key="'cell-' + rowIndex + '-' + columnIndex" class="p-0">{{ row[column] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button v-on:click="updateDataFaceAds">Update Data</button>
    </div>
  </template>
  
  <script>
  import CalendarData from "./CalendarData.vue";
  import FilterButtonOutline from "./FilterButtonOutline.vue";
  
  export default {
    components: {
      FilterButtonOutline,
      CalendarData,
    },
    data() {
        // FUNCTION TO CALCULATE 30 DIAS ANTERIORES
        // const today = new Date();
        // const startDate = new Date(today.getTime() - (31 * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10);
        // const endDate = new Date(today.getTime() - (1 * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10);
        return {
            // main values
            startDate: '2022-05-01',
            endDate: '2022-05-30',
            dataTable: {},
            isDataReady: false,
            
            // values for create the filters
            distinctType: [],
            filtersType: {},
            distinctClass: [],
            filtersClass: {},

            // data for table01
            headerTable01: ['Semana do Ano', 'Alcance', 'Impressões', 'Reprodução 75%', 'Custo', 'CPV 75%'],
            columnsTable01: [ 'distinctWeekYear','reach', 'impressions', 'video_p75_watched_actions', 'spend', 'CPV75'],
            distinctWeekYear: [],
        }
    },
    // functions to be activated when the page is loaded
    async mounted() {
        await this.handleGetDataDatabase();
        this.distinctValuesForFilters();
        this.distinctType.forEach((value) => {this.filtersType[value] = true;});
        this.distinctClass.forEach((value) => {this.filtersClass[value] = true;});
        this.createDataForTable();
    },
    
    methods: {

        // get data from database metaseed and update inside the variable this.$store.state.dataFaceAds.data
        async handleGetDataDatabase() {
            await this.$store.dispatch('getDataDatabase')
        },

        // create lists with the distict values for the filters
        distinctValuesForFilters() {
            const data = this.$store.state.dataFaceAds.data;
            // create list for the type values
            for (const key in data) {
                const value = data[key].type;
                if (!this.distinctType.includes(value)) {this.distinctType.push(value);}
            }
            for (const key in data) {
                const value = data[key].class;
                if (!this.distinctClass.includes(value)) {this.distinctClass.push(value);}
            }
        },

        // update the data that should be printed in table
        createDataForTable() {

            this.isDataReady = false

            // collect the raw data and create the numbers of rows according to week_number
            const data = this.$store.state.dataFaceAds.data;
            const weekNumbers = data.map(item => item.week_number);
            this.distinctWeekYear = [...new Set(weekNumbers)];

            // for each week_number distinct sum the values desired
            for (let e = 0; e < this.distinctWeekYear.length; e++){

                this.dataTable[e] = {
                    distinctWeekYear: 0,
                    reach: 0,
                    impressions: 0,
                    video_p75_watched_actions: 0,
                    spend: 0,
                    CPV75: 0,
                }

                // check if any of the filter values is false
                const shouldAddDataType = Object.values(this.filtersType).every(value => value);
                const shouldAddDataClass = Object.values(this.filtersClass).every(value => value);
                
                data.filter(element => element.week_number === this.distinctWeekYear[e])
                .forEach(element => {
                    // add data only if the filter allows it
                    if ((shouldAddDataType || this.filtersType[element.type]) && (shouldAddDataClass || this.filtersClass[element.class])
                    ) {
                        this.dataTable[e].reach += Number(element.reach);
                        this.dataTable[e].impressions += Number(element.impressions);
                        this.dataTable[e].video_p75_watched_actions += Number(element.video_p75_watched_actions);
                        this.dataTable[e].spend += Number(element.spend);
                    }
                });
                // round and format the values
                this.dataTable[e].distinctWeekYear = this.distinctWeekYear[e]
                this.dataTable[e].reach = Math.round(this.dataTable[e].reach).toLocaleString();
                this.dataTable[e].impressions = Math.round(this.dataTable[e].impressions).toLocaleString();
                this.dataTable[e].video_p75_watched_actions = Math.round(this.dataTable[e].video_p75_watched_actions).toLocaleString();
                this.dataTable[e].spend = this.dataTable[e].spend.toFixed(2);
                this.dataTable[e]['CPV75'] = (this.dataTable[e].spend * this.dataTable[e].video_p75_watched_actions).toFixed(2);
            }

            this.isDataReady = true
        },
        // change the filters to false or true and reload the main function
        handleFilter(value) {
            this.filtersType[value] = !this.filtersType[value];
            this.filtersClass[value] = !this.filtersClass[value];
            this.createDataForTable();
        },
        // get the from facebook database and after update the database metaseed
        async updateDataFaceAds() {
            await this.$store.dispatch('getDataFromFacebookAdd', {
                startDate: this.startDate,
                endDate: this.endDate
            })
        },
    },
}
</script>