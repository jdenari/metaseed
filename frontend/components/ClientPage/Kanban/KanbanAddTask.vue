<template>
    <div class="row align-items-center p-0 m-0">
        <div class="col-4 m-0 px-1">
            <label class="col-form-label row justify-content-end m-0">{{ taskDataItem }}</label>
        </div>
        <div class="col-8 m-0 px-1">
            <input 
                type="text" 
                class="form-control" 
                :value="value"
                @input="$emit('input', $event.target.value)"
            >
        </div>
    </div>
</template>
  
<script>
    export default {
        components: {},
        name: 'KanbanAddTask',
        props: {
            taskDataItem: {
                type: String,
                required: true
            },
            value: {
                required: true
            },
        }
    }
</script>
  
<style>
.col-form-label{
    font-size: 12px;
}
.form-control{
    height: 25px;
}
</style>