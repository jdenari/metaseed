<template>
    <div>
        <MainHeader />
        <div class="d-flex">
            <SideBar />
            <div class="w-100">
                <MainAutomatization />
                <MainFooter class="mt-4"/>
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from '../../components/ClientPage/HomePage/SideBar/SideBar.vue';
import MainHeader from '../../components/MainHeader.vue'
import MainAutomatization from '../../components/ClientPage/HomePage/Automatization/MainAutomatization.vue';
import MainFooter from '../../components/MainFooter.vue'
    export default {
        components: {
            SideBar
            , MainHeader
            , MainAutomatization
            , MainFooter
        },
        // middleware: ['auth']
    }
</script>

<style>

</style>