<template>
    <div>
        <LandingPageHeader />
        <BeClientForm />
    </div>
</template>

<script>
import LandingPageHeader from './LandingPageHeader.vue';
import BeClientForm from './BeClientForm.vue';

export default {
    name: "SectionForm",
    methods: {},
    components: { 
        LandingPageHeader
        , BeClientForm }
}
</script>

<style>

</style> 