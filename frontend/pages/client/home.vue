<template>
    <div>
        <div class="bg-white border-bottom shadow-sm bg-body-tertiary rounded">
            <MainHeader class="navbar navbar-expand"/>
        </div>
        <div class="d-block d-xl-flex">
            <SideBar />
            <div class="w-100 bg-dark-black">
                <MainAutomatization v-if="this.$store.state.homeClientContent === 'automatizationContent'"/>
                <ProfileDataForm v-if="this.$store.state.homeClientContent === 'profileContent'"/>
                <MainDashboard v-if="this.$store.state.homeClientContent === 'dashboardContent'"/>
                <DistributionContentSection v-if="this.$store.state.homeClientContent === 'distributionContentSection'"/>
                <DatabaseTable v-if="this.$store.state.homeClientContent === 'databaseMarketing'"/>
                <LeadsContentSection v-if="this.$store.state.homeClientContent === 'leadsMarketing'"/>
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
import DistributionContentSection from '../../components/ClientPage/Marketing/ContentDistribution/DistributionContentSection.vue';
import DatabaseTable from '../../components/ClientPage/Marketing/Database/DatabaseTable';
import LeadsContentSection from '../../components/ClientPage/Marketing/Leads/LeadsContentSection.vue';

    export default {
        components: {
            SideBar
            , MainHeader
            , MainAutomatization
            , ProfileDataForm
            , MainDashboard
            , MainFooter
            , DistributionContentSection
            , DatabaseTable
            , LeadsContentSection
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