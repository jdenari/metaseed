<template>
    <div>
        <nav class="navbar navbar-expand">
            <div class="d-flex">
                <NuxtLink to="/">
                    <img src="../static/logo/logo-metaseed-small.png" alt="">
                </NuxtLink>
                <NuxtLink to="/" class="d-flex align-items-center no-underline">
                    <div class="logo-name h4 m-0 mx-2 ">Metaseed.Co</div>
                </NuxtLink>
            </div>

            <!-- if the user it is not logged -->
            <ul class="navbar-nav lg-auto d-flex justify-content-end w-100" v-if="!this.$store.state.authenticated">
                <MainButton />
            </ul>
            <!-- if the user it is logged -->
            <ul class="navbar-nav lg-auto d-flex justify-content-end w-100" v-else>
                <PerfilPhotoHeader />
            </ul>
        </nav>
    </div>
</template>

<script>
import MainButton from './MainButton.vue'
import PerfilPhotoHeader from './PerfilPhotoHeader.vue'
export default {
    name: 'MainHeader',
    components: {
        MainButton
        , PerfilPhotoHeader
    },
    methods: {
    }
}
</script>

<style scoped>
.navbar{
    width: 100%;
    margin: auto;
    height: 94px;
}
</style>