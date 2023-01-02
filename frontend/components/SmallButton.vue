<template>
    <button 
        type="button" 
        class="btn main-sml-btn p-2 px-4"
        @click="event"
        > {{ smallButtonText }} 
    </button>
</template>
<script>
    export default {
        name: 'SmallButton',
        props: {
            smallButtonText:{
                type: String,
                required: true 
            },
        },
        methods: {
            event(){
                this.$emit("event");
            },
        }
    }
</script>
<style scoped>
    .main-sml-btn{
        color: white;
        background-color: red;
        font-size: 16px;
        border-radius: 20px;
    }
    .main-sml-btn:hover{
        transition: 0.3s;
        background-color: var(--light-red)
    }
</style>

<style>
/*------------------------------------768px-md-------------------------------------------*/
@media screen and (max-width: 768px) {
    .main-sml-btn{
        font-size: 12px !important;
    }
}

</style>