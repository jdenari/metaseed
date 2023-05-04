<template>
    <div>
        <div class="bg-white border-bottom shadow-sm bg-body-tertiary rounded">
            <MainHeader class="navbar navbar-expand"/>
        </div>
        <div class="d-block d-xl-flex">
            <SideBar />
            <div class="main-project-container w-100 bg-dark-black">
                <MainProject />
            </div>
        </div>
    </div>
</template>
<script>
    import SideBar from '../../components/ClientPage/SideBar/SideBar.vue';
    import MainHeader from '../../components/MainHeader.vue'
    import MainProject from '../../components/ClientPage/Project/MainProject.vue';

    export default {
        components: {
            SideBar
            , MainHeader
            , MainProject
        },
        middleware: ['auth']
    }
</script>
<style>
.main-project-container {
    height: calc(100vh - 94px) !important;
}
</style>