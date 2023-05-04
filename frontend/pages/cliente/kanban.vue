<template>
    <div>
        <div class="bg-white border-bottom shadow-sm bg-body-tertiary rounded">
            <MainHeader class="navbar navbar-expand"/>
        </div>
        <div class="d-block d-xl-flex">
            <SideBar />
            <div class="w-100 bg-dark-black main-kanban-container">
                <MainKanban />
            </div>
        </div>
    </div>
</template>

<script>
    import SideBar from '../../components/ClientPage/SideBar/SideBar.vue';
    import MainHeader from '../../components/MainHeader.vue'
    import MainKanban from '../../components/ClientPage/Kanban/MainKanban.vue';

    export default {
        components: {
            SideBar
            , MainHeader
            , MainKanban
        },
        async asyncData({ store }) {
            await store.dispatch("getTasksForKanban");
        },
        middleware: ['auth']
    }
</script>

<style scoped>
    .main-kanban-container {
        min-height: calc(100vh - 94px);
    }
</style>