<template>
    <b-modal 
        :id="idModalYesNo"
        title="Atenção!" 
        hide-footer 
    >
        <p class="my-4">{{ textModalYesNo }}</p>
        <div class="d-flex flex-row-reverse w-100">
            <button 
                type="button" 
                class="btn btn-primary m-1" 
                @click="eventYes"
                >Sim
            </button>
            <button 
                type="button" 
                class="btn btn-secondary m-1" 
                @click="eventNo"
                >Voltar
            </button>
        </div>
    </b-modal>
</template>
<script>
export default {
    name: 'ModalYesNo',
    props: {
        textModalYesNo: {
            type: String,
            required: true
        },
        idModalYesNo: {
            type: String,
            required: true
        }
    },
    methods:{
        eventYes(){
            this.$emit("eventYes");
        },
        eventNo(){
            this.$emit("eventNo");
        }
    }
}
</script>
<style scoped>

</style>