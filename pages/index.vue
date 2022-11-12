<template>
    <div>
        <section class="main-sec p-3">
            <SectionForm />
        </section>
    </div>
</template>

<script>
import SectionForm from '../components/LandingPage/Section-Form.vue';

export default {
    name: "IndexPage",
    components: {
        SectionForm
    }
}
</script>

<style scoped>
    section.main-sec{
    background-image:url(../static/images/landing-page-bg-01.png);
    background-color: white;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

<style>

@font-face {
    font-family: 'monteserrat';
    src: url(../fonts/monteserrat/Montserrat-VariableFont_wght.ttf) format('truetype');
    font-weight: normal; 
    font-style: normal; 
}

body{
    zoom: 1;
    font-family: 'monteserrat';
}

</style>
