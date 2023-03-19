<template>
     <div class="main-background view-h-100"> 
        <div class="navbar navbar-expand bg-white border-bottom shadow-sm bg-body-tertiary rounded">
            <MainHeader class="container-metaseed"/>
        </div>
        <LoginField class="main-form m-5"/>
        <MainFooter class="main-footer" />
    </div>
</template>

<script>
import MainHeader from '../../components/MainHeader.vue'
import LoginField from '../../components/SigninPage/LoginField.vue';
import MainFooter from '../../components/MainFooter.vue';
export default {
    components: {
        MainHeader
        , LoginField
        , MainFooter
    },
    methods: {},
    middleware: ['auth']
}
</script>

<style scoped>
    .main-footer{
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -90%);
    }

    .main-form{
        margin-top: 100px !important;
    }
</style>