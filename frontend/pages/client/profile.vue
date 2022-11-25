<template>
    <div>
        <MainHeader />
        <ProfileDataForm />
        <MainFooter />
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
    }
}
</script>

<style scoped>
</style>
