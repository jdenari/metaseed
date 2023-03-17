<template>
    <div class="main-background">
        <div class="navbar navbar-expand bg-white border-bottom shadow-sm bg-body-tertiary rounded">
            <MainHeader class="container-metaseed"/>
        </div>
        <div class="container-metaseed">
            <div class="d-xl-flex sec-lading-page">
                <div class="col-xl-7 d-xl-block d-none">
                    <img src="../static/images/laptop-image-small.png" alt="" class="client-form-image w-100 m-auto shadow-sm bg-body-tertiary">
                </div>
                <div class="col-11 col-sm-9 col-md-7 col-xl-5 d-flex m-xl-0 m-auto align-items-center">
                    <BeClientForm class="px-0 py-5"/>
                </div>
            </div>
        </div>
        <div class="w-100 bg-white">
            <MetaseedValues />
        </div>
        <div class="bg-dark-black">
            <SucessPillars />
        </div>
        <div class="container-metaseed">
            <MessageForm />
            <MainFooter />
        </div>
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
    },
    middleware: ['auth']
}
</script>

<style>
:root{
    --dark-black: #2B2D42;
    --light-black: #8D99AE;
    --light-white: #EDF2F4;
    --light-red: #FF9A9A;
    --dark-red: #d90429;
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
.no-underline{text-decoration: none !important;color: inherit !important;cursor: pointer;}

.bg-dark-black{background-color: var(--dark-black);}
.bg-light-black{background-color: var(--light-black);}
.bg-light-white{background-color: var(--light-white);}
.bg-light-red{background-color: var(--light-red);}
.bg-dark-red{background-color: var(--dark-red);}

.text-dark-black{color: var(--dark-black);}
.text-light-black{color: var(--light-black);}
.text-light-white{color: var(--light-white);}
.text-light-red{color: var(--light-red);}
.text-dark-red{color: var(--dark-red);}

.main-background{background-color: var(--light-white);}
.container-metaseed{width: 75%;margin: 0px auto;}
.view-h-100{height: 100vh;}

</style>

<style scoped>
</style>

<style>
/*------------------------------------1600px----------------------------------------------*/ 
@media screen and (max-width: 1600px) {
    .client-form-image{
        display: none;
    }
    .sec-lading-page{
        background-image:url(../static/images/laptop-image.jpg);
        background-color: white;
        background-repeat: no-repeat;
        background-size: cover;
    }
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
    .container-metaseed{
        width: 100%;
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