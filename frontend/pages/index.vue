<template>
    <div>
        <MainHeader />
        <section class="main-sec p-3">
            <SectionForm />
        </section>
    </div>
</template>

<script>
import SectionForm from '../components/LandingPage/Section-Form.vue';
import MainHeader from '../components/MainHeader.vue';

export default {
    name: "IndexPage",
    components: {
        SectionForm
        , MainHeader
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

:root{
    --dark-black: #212529;
    --light-white: #F8F9FA;
    --light-red: rgba(255, 0, 0, 0.6);
}

@font-face {
    font-family: 'monteserrat';
    src: url(../fonts/Karla/Karla-VariableFont_wght.ttf) format('truetype');
    font-weight: normal; 
    font-style: normal; 
}

body{
    zoom: 1;
    font-family: 'monteserrat';
}

.no-underline{
    text-decoration: none !important;
    color: inherit !important;
}

</style>
  </script>
