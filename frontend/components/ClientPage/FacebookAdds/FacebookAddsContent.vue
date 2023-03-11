<template>
    <div>
        <CalendarData 
            :start-date="startDate" 
            :end-date="endDate" 
            @update:start-date="startDate = $event" 
            @update:end-date="endDate = $event" 
        />
        <div v-for="(type, index) in distinctType" :key="index">
        <FilterButtonOutline 
            v-bind:FilterButtonOutlineText="type" 
            v-on:event="handleFilter(type)" 
            v-bind:isActive="filtersType[type]"
        />
        </div>
        <div>
            <table class="table table-striped table-dist-content text-center m-3">
                <thead>
                    <tr>
                    <th>Week Year</th>
                    <th>Reach</th>
                    <th>Impressions</th>
                    <th>Spend</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in distinctWeekYear" :key="index">
                        <td class="p-0">{{ distinctWeekYear[index] }}</td>
                        <td class="p-0">{{ dataTable[index].reach.toFixed(0) }}</td>
                        <td class="p-0">{{ dataTable[index].impressions.toFixed(0) }}</td>
                        <td class="p-0">{{ dataTable[index].spend.toFixed(2) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import CalendarData from './CalendarData.vue';
import FilterButtonOutline from './FilterButtonOutline.vue';
import TableDistContent from './TableDistContent.vue';

export default {
    components: {
        TableDistContent
        , FilterButtonOutline
        , CalendarData
    },
    data() {
        // FUNCTION TO CALCULATE 30 DIAS ANTERIORES
        // const today = new Date();
        // const startDate = new Date(today.getTime() - (31 * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10);
        // const endDate = new Date(today.getTime() - (1 * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10);
        return {
            // date variables
            startDate: '2022-05-01',
            endDate: '2022-05-30',
            distinctWeekYear: [],

            // data to print inside the table! it could be filtered
            dataTable: {},
            
            // variables to create the filters
            distinctType: [],
            filtersType: {}
        }
    },
    // functions to be activated when the page is loaded
    async mounted() {
        await this.handleGetDataDatabase();
        this.distinctValuesForFilters();
        this.distinctType.forEach((type) => {this.filtersType[type] = true;});
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
                const type = data[key].type;
                if (!this.distinctType.includes(type)) {this.distinctType.push(type);}
            }
        },

        // update the data that should be printed in table
        createDataForTable() {

            // collect the raw data and create the numbers of rows according to week_number
            const data = this.$store.state.dataFaceAds.data;
            const weekNumbers = data.map(item => item.week_number);
            this.distinctWeekYear = [...new Set(weekNumbers)];

            // for each week_number distinct sum the values desired
            for (let e = 0; e < this.distinctWeekYear.length; e++){

                this.dataTable[e] = {
                    reach: 0,
                    impressions: 0,
                    spend: 0
                }

                // check if any of the filter values is false
                const shouldAddData = Object.values(this.filtersType).every(value => value);
                
                data.filter(element => element.week_number === this.distinctWeekYear[e])
                .forEach(element => {
                    // add data only if the filter allows it
                    if (shouldAddData || this.filtersType[element.type]) {
                        this.dataTable[e].reach += element.reach;
                        this.dataTable[e].impressions += element.impressions;
                        this.dataTable[e].spend += element.spend;
                    }
                });
            }
        },
        // change the filters to false or true and reload the main function
        handleFilter(type) {
            this.filtersType[type] = !this.filtersType[type];
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