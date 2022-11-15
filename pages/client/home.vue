<template>
    <div>
        <MainHeader />
        <div class="d-flex">
            <SideBar />
            <div class="w-100">
                <TopDashboard class="top-dashboard d-flex justify-content-center p-3" />
            </div>
        </div>
    </div>
  </template>

<script>
import SideBar from '../../components/ClientPage/SideBar.vue';
import MainHeader from '../../components/MainHeader.vue'
import TopDashboard from '../../components/ClientPage/TopDashboard.vue'
    export default {
        components: {
            SideBar
            , MainHeader
            , TopDashboard
        },
        // middleware: ['auth']
    }
</script>

<style>

</style>