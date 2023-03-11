<template>
    <div>
        <CalendarData
            :start-date="startDate"
            :end-date="endDate"
            @update:start-date="startDate = $event"
            @update:end-date="endDate = $event"
        />
        <div v-for="(value, index) in distinctType" :key="'type-' + index">
            <FilterButtonOutline
                v-bind:FilterButtonOutlineText="value"
                v-on:event="handleFilter(value)"
                v-bind:isActive="filtersType[value]"
            />
        </div>
        <div v-for="(value, index) in distinctClass" :key="'class-' + index">
            <FilterButtonOutline
                v-bind:FilterButtonOutlineText="value"
                v-on:event="handleFilter(value)"
                v-bind:isActive="filtersClass[value]"
            />
            </div>
        <div>
            <MainTable :data="dataTable" :distinctWeekYear="distinctWeekYear"></MainTable>
        </div>
    </div>
</template>

<script>
import CalendarData from './CalendarData.vue';
import FilterButtonOutline from './FilterButtonOutline.vue';
import MainTable from './MainTable.vue';

export default {
    components: {
        FilterButtonOutline
        , CalendarData
        , MainTable
    },
    data() {
        // FUNCTION TO CALCULATE 30 DIAS ANTERIORES
        // const today = new Date();
        // const startDate = new Date(today.getTime() - (31 * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10);
        // const endDate = new Date(today.getTime() - (1 * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10);
        return {
            startDate: '2022-05-01',
            endDate: '2022-05-30',
            distinctWeekYear: [],
            dataTable: {},
            distinctType: [],
            filtersType: {},
            distinctClass: [],
            filtersClass: {},
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
                const shouldAddDataType = Object.values(this.filtersType).every(value => value);
                const shouldAddDataClass = Object.values(this.filtersClass).every(value => value);

                console.log(shouldAddDataType)
                console.log(shouldAddDataClass)
                
                data.filter(element => element.week_number === this.distinctWeekYear[e])
                .forEach(element => {
                    // add data only if the filter allows it
                    if (
                    (shouldAddDataType || this.filtersType[element.type]) &&
                    (shouldAddDataClass || this.filtersClass[element.class])
                    ) {
                        this.dataTable[e].reach += element.reach;
                        this.dataTable[e].impressions += element.impressions;
                        this.dataTable[e].spend += element.spend;
                    }
                });
            }
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