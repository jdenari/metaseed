<template>
    <div class="form-inline">
        <div class="form-group mr-2">
            <label for="startDate" class="mr-2">Start Date:</label>
            <input type="date" class="form-control" id="startDate" v-model="startDate">
        </div>
        <div class="form-group mr-2">
            <label for="endDate" class="mr-2">End Date:</label>
            <input type="date" class="form-control" id="endDate" v-model="endDate">
        </div>
        <button type="button" class="btn btn-primary" @click="handleButtonClick">Submit</button>
        <MessageWarning 
            :messageWarning="this.$store.state.messageWarning"
            class="text-start m-0 w-75"
        />
    </div>
  </template>
  
<script>
import MessageWarning from '../../MessageWarning.vue';
    export default {
        components: {
            MessageWarning
        },
        data() {
            return {
                startDate: null,
                endDate: null
            }
        },
        methods: {
            async handleButtonClick() {
                await this.$store.dispatch('getDataFromFacebookAdd', {
                    startDate: this.startDate,
                    endDate: this.endDate
                })
            }
        }
    }
</script>
  