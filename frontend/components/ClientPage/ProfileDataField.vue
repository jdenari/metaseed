<template>
    <div class="row p-1 g-3 align-items-center">
        <div class="col-4">
            <label class="col-form-label row justify-content-end">{{ profileItem }}</label>
        </div>
        <div class="col-8">
            <input type="text" class="form-control" v-bind:value=profileDataItem>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileDataField',
    props: ['profileItem', 'profileDataItem']
}
</script>

<style scoped>
    
</style>