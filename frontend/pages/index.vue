<template>
    <div>
        <MainHeader />
        <div class="d-xl-flex sec-lading-page">
            <div class="col-6 d-none d-xl-block"></div>
            <div class="col-lg-6 col-12 m-auto">
                <BeClientForm class="client-form p-3 w-75"/>
            </div>
        </div>
        <MetaseedValues />
        <SucessPillars />
        <MessageForm />
        <MainFooter />
    </div>
</template>

<script>
import BeClientForm from '../components/LandingPage/BeClientForm.vue';
import MainHeader from '../components/MainHeader.vue';
import SucessPillars from '../components/LandingPage/SucessPillars.vue'
import MetaseedValues from '../components/LandingPage/MetaseedValues.vue'
import MessageForm from '../components/LandingPage/MessageForm.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
    name: "IndexPage",
    components: {
        BeClientForm
        , MainHeader
        , SucessPillars
        , MetaseedValues
        , MessageForm
        , MainFooter
    }
}
</script>

<style>

:root{
    --dark-black: #212529;
    --light-white: #F8F9FA;
    --light-red: rgba(255, 0, 0, 0.6);
    --light-gray: #e5e5e5;
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
    cursor: pointer;
}

</style>

<style scoped>
.sec-lading-page{
    background-image:url(../static/images/laptop-image.jpg);
    background-color: white;
    background-repeat: no-repeat;
    background-size: cover;
}
.main-img{
    width: 55%;
}
.client-form{
    min-width: 550px
}
</style>

<style>
/*------------------------------------1600px----------------------------------------------*/ 
@media screen and (max-width: 1600px) {

}
/*-----------------------------------1400px-xxl------------------------------------------*/ 
@media screen and (max-width: 1400px) {
    html{
        font-size: 90.0%;
    }

}
/*-----------------------------------1200px-xl-------------------------------------------*/ 
@media screen and (max-width: 1200px) {

}
/*------------------------------------992px-lg-------------------------------------------*/ 
@media screen and (max-width: 992px) {
    html{
        font-size: 85.0%;
    }
    .client-form{
        min-width: 0px !important;
    }
}
/*------------------------------------768px-md-------------------------------------------*/
@media screen and (max-width: 768px) {
    .client-form{
        width: 100% !important;
    }
}
/*------------------------------------576px-sm-------------------------------------------*/
@media screen and (max-width: 576px) {
    html{
        font-size: 75.0%;
    }
}</style>