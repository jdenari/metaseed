<template>
    <nav class="navbar navbar-expand-xl p-3 bg-dark">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end w-100">
            <div v-if="!this.$store.state.userLogin">
                <button class="btn btn-light me-md-2 m-1" type="button">Registrar</button>
                <NuxtLink to="/auth/signin">
                    <button 
                        class="btn btn-light m-1" 
                        type="button"
                        >Entrar
                    </button>
                </NuxtLink>
            </div>
            <div v-else>
                <b-list-group class="rounded-pill">
                    <b-list-group-item class="d-flex align-items-center p-2">
                        <b-avatar 
                            href="#bar" 
                            src="../static/perfil/joao-vitor-denari-dos-santos.png"
                            class="m-1"
                        ></b-avatar>
                        <div class="m-1">João Denari</div>
                    </b-list-group-item>
                </b-list-group>
            </div>
        </div>    
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