<template>
    <b-modal 
        :id="idModalYesNo"
        title="Parabéns!" 
        hide-footer 
    >
        <p class="my-4">{{ textModalYesNo }}</p>
    </b-modal>
</template>
<script>
export default {
    name: 'ModalSuccess',
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
}
</script>
<style scoped>

</style>