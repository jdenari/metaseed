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
            <button type="button" class="btn btn-primary" @click="handleButtonClick">Submit</button>
            <button type="button" class="btn btn-primary" @click="handleUpdate">Update</button>
        </div>
        <TableDistContent />
    </div>
</template>

<script>
import TableDistContent from './TableDistContent.vue';

export default {
    components: {
        TableDistContent
    },
    data() {
        return {
            startDate: '2022-05-01',
            endDate: '2022-05-30',
        }
    },
    methods: {
        async handleButtonClick() {
            await this.$store.dispatch('getDataFromFacebookAdd', {
                startDate: this.startDate,
                endDate: this.endDate
            })
        },
        async handleUpdate() {
            await this.$store.dispatch('updateDatabase', this.$store.state.dataFaceAds.data)
        }
    },
}
</script>