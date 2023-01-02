<template>
    <div class="add-less-button-div px-3 d-flex">
        <button type="button" class="btn btn-outline-danger w-100 mx-2">+</button>
        <button type="button" class="btn btn-outline-secondary w-100">-</button>
    </div>
</template>
  
<script>
export default {
    name: 'AddLessButton',
    components: {
    },
    props: {
    },
}
</script>

<style scoped>
.add-less-button-div {
    margin-top: 50px;
}
.btn{
    height: 36px;
    width: 40px !important;
}
</style>




