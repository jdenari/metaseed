<template>
     <div class="p-3">
        <MainHeader />
        <LoginField />
    </div>
</template>

<script>
import MainHeader from '../../components/MainHeader.vue';
import LoginField from '../../components/SigninPage/LoginField.vue';
export default {
    components: {
        MainHeader
        , LoginField
    },
    methods: {}
}
</script>

<style>

</style>