<template>
    <div>
        <MainHeader />
        <ProfileDataForm />
        <MainFooter class="footer-profile"/>
    </div>
</template>

<script>
import MainHeader from '../../components/MainHeader.vue'
import MainFooter from '../../components/MainFooter.vue'
import ProfileDataForm from '../../components/ClientPage/ProfilePage/ProfileDataForm.vue'
export default {
    name: "profile",
    components: {
        MainHeader
        , MainFooter
        , ProfileDataForm
    },
    middleware: ['auth']
}
</script>

<style scoped>
    .footer-profile{
        margin-top: 40px;
    }
</style>
