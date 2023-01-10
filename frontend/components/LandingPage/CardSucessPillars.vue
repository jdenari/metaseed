<template>
    <div class="card">
        <div class="card-header">
            <img :src="imageCard" alt="">
        </div>
        <div class="card-body">
            <p class="card-text text-dark"> {{ textCard }}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CardSucessPillars',
        props: {
            textCard:{
                type: String,
                required: true 
            },
            imageCard:{
                type: String,
                required: true 
            }
        }
    }
</script>
<style scoped>

</style>