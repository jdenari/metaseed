<template>
    <div>
      <!-- <SideBar /> -->
      <MainHeader />
    </div>
  </template>

<script>
import SideBar from '../../components/ClientPage/SideBar.vue';
import MainHeader from '../../components/MainHeader.vue'
    export default {
        components: {
            SideBar
            , MainHeader
        },
        middleware: ['auth']
    }
</script>

<style>

</style>