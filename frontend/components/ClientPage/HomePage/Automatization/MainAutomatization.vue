<template>
    <section class="p-3">
        <div class="d-flex align-items-center">
            <img src="../../../../static/icons/gear.svg" alt="" class="icon-image m-2 mx-3">
            <div class="h1 m-0">AUTOMATIZAÇÕES</div>
        </div>
        <AddLessButton />
        <FieldAutomatization />
    </section>
</template>
  
<script>
import AddLessButton from './AddLessButton.vue';
import FieldAutomatization from './FieldAutomatization.vue';
export default {
    name: 'MainAutomatization',
    components: {
        FieldAutomatization
        , AddLessButton
    },
    props: {

    },
}
</script>

<style scoped>
.icon-image{
    width: 25px;
}
</style>