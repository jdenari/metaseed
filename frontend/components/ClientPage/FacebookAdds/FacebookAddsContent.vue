<template>
    <div>
        <div class="form-inline mb-3">
            <div class="form-group mr-2">
                <label for="startDate" class="mr-2">Start Date:</label>
                <input type="date" class="form-control" id="startDate" v-model="startDate">
            </div>
            <div class="form-group mr-2">
                <label for="endDate" class="mr-2">End Date:</label>
                <input type="date" class="form-control" id="endDate" v-model="endDate">
            </div>
            <button type="button" class="btn btn-primary" @click="handleUpdateDataFaceAds">UPDATE DATA</button>
        </div>
        <div>
            <table class="table table-striped table-dist-content text-center">
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
                        <td class="p-0">{{ result[index].reach.toFixed(0) }}</td>
                        <td class="p-0">{{ result[index].impressions.toFixed(0) }}</td>
                        <td class="p-0">{{ result[index].spend.toFixed(2) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import TableDistContent from './TableDistContent.vue';

export default {
    components: {
        TableDistContent
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
            result: {}, 
        }
    },
    async mounted() {
        await this.handleGetDataDatabase();
    },
    
    methods: {

        async handleUpdateDataFaceAds() {
            await this.$store.dispatch('getDataFromFacebookAdd', {
                startDate: this.startDate,
                endDate: this.endDate
            })
        },

        async handleGetDataDatabase() {
            await this.$store.dispatch('getDataDatabase')
            this.updateLists();
        },

        updateLists() {

            const data = this.$store.state.dataFaceAds.data;
            const weekNumbers = data.map(item => item.week_number);

            this.distinctWeekYear = [...new Set(weekNumbers)];
            for (let e = 0; e < this.distinctWeekYear.length; e++){
                this.result[e] = {
                    reach: 0,
                    impressions: 0,
                    spend: 0
                }
                data.forEach(element => {
                    if (element.week_number === this.distinctWeekYear[e]){
                        this.result[e].reach += element.reach
                        this.result[e].impressions += element.impressions
                        this.result[e].spend += element.spend
                    }
                })
            }
        }
    },
}
</script>