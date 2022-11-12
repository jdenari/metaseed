<template>
     <div class="p-3">
        <LandingPageHeader />
        <LoginField />
    </div>
</template>

<script>
import LandingPageHeader from '../../components/LandingPage/LandingPageHeader.vue';
import LoginField from '../../components/SigninPage/LoginField.vue';
export default {
    components: {
        LandingPageHeader
        , LoginField
    },
    methods: {}
}
</script>

<style>

</style>