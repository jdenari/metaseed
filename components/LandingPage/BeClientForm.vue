<template>
    <section class="main-sec p-03">
        <div class="main-div col-flex w-50 text-center p-3">
            <div class="form-div p-3 m-auto">
                <div class="logo-div p-3">
                    <img src="../../static/logo/empresa-milionaria.png" alt="Logo tipo da Base da Empresa Milionária" class="img-fluid">
                </div>
                <h2>O ponto de partida para sua empresa ter sucesso!</h2>
                <h4 class="p-3">Aprenda a construir empresas milionárias e garanta o sucesso da sua empresa.</h4>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Preencha com o seu nome" 
                    aria-label="First name"
                >
                <input 
                    type="email" 
                    class="form-control mt-1" 
                    placeholder="Preencha com o seu e-mail" 
                    aria-label="E-mail"
                >
                <button type="button" class="btn btn-danger w-100 mt-1">QUERO CONSTRUIR UMA EMPRESA MILIONÁRIA!</button>
                <p class="m-1">RECEBA O MÉTODO 100% GRATUITO</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BeClientForm',
    methods: {
    }
}
</script>

<style scoped>
div.form-div{
    background-color: rgba(255, 255, 255, 0.5);
    max-width: 460px;
    border-radius: 15px;
}

</style> 



