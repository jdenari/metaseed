<template>
    <nav class="navbar navbar-expand-xl p-3">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end w-100">
            <button class="btn btn-dark me-md-2 m-1" type="button">Registrar</button>
            <NuxtLink to="/auth/signin">
                <button 
                    class="btn btn-dark m-1" 
                    type="button"
                    >Entrar
                </button>
            </NuxtLink>
            
        </div>    
    </nav>
</template>

<script>
export default {
    name: 'LandingPageHeader',
    methods: {
    }
}
</script>

<style>

</style> 