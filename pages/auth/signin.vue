<template>
     <div>
        <MainHeader />
        <LoginField />
        <MainFooter />
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

<style>

</style>