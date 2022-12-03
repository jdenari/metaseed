<template>
    <button type="button" class="btn main-btn p-2 px-4"> {{ smallButtonText }}</button>
</template>
<script>
    export default {
        name: 'SmallButton',
        props: {
            smallButtonText:{
                type: String,
                required: true 
            },
        }
    }
</script>
<style scoped>
    .main-btn{
        color: white;
        background-color: red;
        font-size: 16px;
        border-radius: 20px;
    }
    .main-btn:hover{
        transition: 0.3s;
        background-color: var(--light-red)
    }
</style>