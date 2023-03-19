<template>
    <div>
        <div class="bg-white border-bottom shadow-sm bg-body-tertiary rounded">
            <MainHeader class="navbar navbar-expand"/>
        </div>
        <div class="d-block d-xl-flex">
            <SideBar />
            <div class="w-100 bg-dark-black">
                <DistributionContentSection />
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from '../../components/ClientPage/SideBar/SideBar.vue';
import MainHeader from '../../components/MainHeader.vue'
import MainFooter from '../../components/MainFooter.vue'
import DistributionContentSection from '../../components/ClientPage/Marketing/ContentDistribution/DistributionContentSection.vue';

    export default {
        components: {
            SideBar
            , MainHeader
            , MainFooter
            , DistributionContentSection
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