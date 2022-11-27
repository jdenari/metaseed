<template>
    <div>
        <MainHeader />
        <FileInput />
    </div>
</template>

<script>
import MainHeader from '../../components/MainHeader.vue'
import FileInput from '../../components/ClientPage/ProcessPage/FileInput.vue'
export default {
    name: "process",
    components: {
        MainHeader
        , FileInput
    }
}
</script>

<style scoped>
</style>