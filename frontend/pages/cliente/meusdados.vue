<template>
    <div>
        <div class="bg-white border-bottom shadow-sm bg-body-tertiary rounded">
            <MainHeader class="navbar navbar-expand"/>
        </div>
        <div class="d-block d-xl-flex">
            <SideBar />
            <div class="w-100 bg-dark-black">
                <ProfileDataForm />
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../../components/ClientPage/SideBar/SideBar.vue';
import MainHeader from '../../components/MainHeader.vue'
import ProfileDataForm from '../../components/ClientPage/ProfilePage/ProfileDataForm.vue';

    export default {
        components: {
            SideBar
            , MainHeader
            , ProfileDataForm
        },
        middleware: ['auth']
    }
</script>

<style>
</style>