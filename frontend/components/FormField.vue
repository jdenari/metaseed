<template>
    <div class="my-3">
        <label for="exampleInputEmail1" class="form-label"> {{ formFieldItem }}</label>
        <input  
            class="form-control" 
            :type="textAttributeValue"
            :placeholder="placeholderAttributeValue"
            :value="value"
            @input="$emit('input', $event.target.value)"
        >
    </div>
</template>
<script>
    export default {
        name: 'FormField',
        props: {
            formFieldItem:{
                type: String,
                required: true 
            },
            textAttributeValue:{
                type: String,
                required: true 
            },
            placeholderAttributeValue:{
                type: String,
                required: true 
            },
            value: {
                type: String
            },
        },
        methods: {
            onInput(event) {
                this.$emit('update', event.target.value)
            }
        }
    }
</script>
<style scoped>

</style>



