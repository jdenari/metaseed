<template>
    <div>
        <div class="bg-white border-bottom shadow-sm bg-body-tertiary rounded">
            <MainHeader class="navbar navbar-expand"/>
        </div>
        <div class="d-block d-xl-flex">
            <SideBar />
            <div class="w-100 bg-dark-black">
                <MainDashboard />
            </div>
        </div>
    </div>
</template>

<script>
import MainDashboard from '../../components/ClientPage/Dashboards/MainDashboard.vue';
import SideBar from '../../components/ClientPage/SideBar/SideBar.vue';
import MainHeader from '../../components/MainHeader.vue'

    export default {
        components: {
            SideBar
            , MainHeader
            , MainDashboard
        },
        middleware: ['auth']
    }
</script>

<style>
</style>