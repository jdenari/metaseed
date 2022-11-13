<template>
    <div>
      <SideBar />
    </div>
  </template>

<script>
import SideBar from '../../components/ClientPage/SideBar.vue';
    export default {
        components: {
            SideBar
        },
        middleware: ['auth']
    }
</script>

<style>

</style>