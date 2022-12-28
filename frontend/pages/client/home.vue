<template>
    <div>
        <MainHeader />
        <div class="d-flex">
            <SideBar />
            <div class="w-100">
                <MainAutomatization v-if="this.$store.state.homeClientContent === 'automatizationContent'"/>
                <ProfileDataForm v-if="this.$store.state.homeClientContent === 'profileContent'"/>
                <MainDashboard v-if="this.$store.state.homeClientContent === 'dashboardContent'"/>
                <MainFooter class="footer"/>
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from '../../components/ClientPage/SideBar/SideBar.vue';
import MainHeader from '../../components/MainHeader.vue'
import MainAutomatization from '../../components/ClientPage/Automatization/MainAutomatization.vue';
import ProfileDataForm from '../../components/ClientPage/ProfilePage/ProfileDataForm.vue'
import MainDashboard from '../../components/ClientPage/Dashboards/MainDashboard.vue'
import MainFooter from '../../components/MainFooter.vue'
    export default {
        components: {
            SideBar
            , MainHeader
            , MainAutomatization
            , ProfileDataForm
            , MainDashboard
            , MainFooter
        },
        // middleware: ['auth']
    }
</script>

<style>
.footer {
    position: fixed;
    bottom: 0px;
    left:50;
    transform: translate(12.5%, 0%);
}
</style>