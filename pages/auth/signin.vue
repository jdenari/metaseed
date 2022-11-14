<template>
     <div class="main-page"> 
        <MainHeader />
        <LoginField class="main-form"/>
        <MainFooter class="main-footer" />
    </div>
</template>

<script>
import MainHeader from '../../components/MainHeader.vue';
import LoginField from '../../components/SigninPage/LoginField.vue';
import MainFooter from '../../components/MainFooter.vue';
export default {
    components: {
        MainHeader
        , LoginField
        , MainFooter
    },
    methods: {}
}
</script>

<style scoped>
    .main-page{
        height: 100vh;
        position: relative;
    }

    .main-footer{
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -100%);
    }
    .main-form{
        margin: 130px;
    }

</style>