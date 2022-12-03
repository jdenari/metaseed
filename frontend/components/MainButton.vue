<template>
    <NuxtLink to="/auth/signin" class="d-flex align-items-center" style="text-decoration: none; color: inherit;">
        <button type="button" class="btn main-btn p-2 px-4">Entrar</button>
    </NuxtLink>
</template>
<script>
    export default {
        name: 'MainButton',
    }
</script>
<style scoped>
    .main-btn{
        color: white;
        background-color: red;
        font-size: 20px;
        border-radius: 30px;
    }
    .main-btn:hover{
        transition: 0.3s;
        background-color: var(--light-red)
    }
</style>