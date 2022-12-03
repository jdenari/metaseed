<template>
    <div>
        <MainHeader />
        <div class="d-flex">
            <BeClientForm class="client-form p-3" />
            <img src="../static/images/business-desk.png" alt="" class="main-img">
        </div>
        <SucessPillars />
    </div>
</template>

<script>
import BeClientForm from '../components/LandingPage/BeClientForm.vue';
import MainHeader from '../components/MainHeader.vue';
import SucessPillars from '../components/LandingPage/SucessPillars.vue'

export default {
    name: "IndexPage",
    components: {
        BeClientForm
        , MainHeader
        , SucessPillars
    }
}
</script>

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

<style scoped>
.client-form{
    width: 45%;
}
.main-img{
    width: 55%;
}
</style>