<template>
    <div>
        <div class="bg-white border-bottom shadow-sm bg-body-tertiary rounded">
            <MainHeader class="navbar navbar-expand"/>
        </div>
        <div class="d-block d-xl-flex">
            <SideBar />
            <div class="w-100 bg-dark-black">
                <DatabaseTable />
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from '../../components/ClientPage/SideBar/SideBar.vue';
import MainHeader from '../../components/MainHeader.vue'
import DatabaseTable from '../../components/ClientPage/Marketing/Database/DatabaseTable';


    export default {
        components: {
            SideBar
            , MainHeader
            , DatabaseTable
        },
        // middleware: ['auth']
    }
</script>

<style>
</style>