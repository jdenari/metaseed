<template>
    <div class="card-variable bg-light rounded p-2 px-5">
        <h5> {{ cardNumber }}</h5>
        <h3>{{ cardVariable }}</h3>
    </div>
</template>
  
<script>
export default {
    name: 'HighlightCard',
    props: {
        cardVariable:{
            type: String,
            required: true 
        }, 
        cardNumber:{
            type: String,
            required: true 
        }}
}
</script>

<style scoped>

    .card-variable{
        width: 260px;
    }

</style>