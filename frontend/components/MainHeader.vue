<template>
    <nav class="navbar navbar-expand-xl p-3 bg-dark">
        <img src="../static/logo/logo-metaseed-small.png" alt="" class="px-3">
        <ul class="navbar-nav lg-auto">
            <li class="nav-item px-3">
                <NuxtLink to="/">
                    <a 
                        class="nav-link text-light" 
                        >Home
                    </a>
                </NuxtLink>
            </li>
        </ul>
        <ul class="navbar-nav lg-auto d-md-flex justify-content-md-end w-100" v-if="!this.$store.state.userLogin">
            <li class="nav-item px-3">
                <a href="#" class="nav-link text-light">Registrar</a>
            </li>
            <li class="nav-item px-3">
                <NuxtLink to="/auth/signin">
                    <button 
                        class="btn btn-outline-light" 
                        type="button"
                        >Entrar
                    </button>
                </NuxtLink>
            </li>
        </ul>
        <ul class="navbar-nav lg-auto d-md-flex justify-content-md-end w-100" v-else>
            <li class="nav-item px-3 d-flex align-items-center">
                <b-avatar 
                    href="#bar" 
                    src="../static/perfil/joao-vitor-denari-dos-santos.png"
                    class="m-1"
                ></b-avatar>
                <div class="m-2 text-light">João Denari</div>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'MainHeader',
    methods: {
    }
}
</script>

<style>

</style> 