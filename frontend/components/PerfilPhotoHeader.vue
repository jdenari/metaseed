<template>
    <li class="perfil-photo nav-item px-1 d-flex align-items-center">
        <b-avatar 
            href="#bar" 
            src="../static/perfil/joao-vitor-denari-dos-santos.png"
            class="m-1"
        ></b-avatar>
        <NuxtLink to="/client/profile" class="no-underline">
            <div class="m-2 text-dark"> {{ $store.state.firstName }}</div>
        </NuxtLink>
    </li>
</template>
<script>
    export default {
        name: 'PerfilPhotoHeader',
    }
</script>
<style scoped>
    .perfil-photo{
        font-size: 20px;
        border-radius: 30px;
    }
    .perfil-photo:hover{
        transition: 0.3s;
        background-color: var(--light-white)
    }
</style>