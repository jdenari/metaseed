<template>
    <div>
        <MainHeader />
        <div class="d-flex">
            <SideBar />
            <div class="w-100">
                <TopDashboard class="top-dashboard d-flex justify-content-center p-3" />
                <MainDashboard />
                <MainFooter class="mt-4"/>
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from '../../components/ClientPage/HomePage/SideBar/SideBar.vue';
import MainHeader from '../../components/MainHeader.vue'
import MainFooter from '../../components/MainFooter.vue'
import TopDashboard from '../../components/ClientPage/HomePage/Dashboard/TopDashboard.vue'
import MainDashboard from '../../components/ClientPage/HomePage/Dashboard/MainDashboard.vue'
    export default {
        components: {
            SideBar
            , MainHeader
            , MainFooter
            , TopDashboard
            , MainDashboard
        },
        middleware: ['auth']
    }
</script>

<style>

</style>