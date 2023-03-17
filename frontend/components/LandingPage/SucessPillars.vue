<template>
    <div class="container-metaseed p-5">
        <div class="h1 mb-5 text-center text-light">OS 6 PILARES DAS EMPRESAS DE SUCESSO</div>
        <div class="container-pillars m-auto text-center p-2">
            <div class="d-md-flex d-block text-light">
                <div class="card col lead my-2 mx-2">
                    <div class="card-header">
                        <img src="../../static/icons/box.png" alt="" class="my-1">
                    </div>
                    <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark w-100 text-center"> Conheça a fundo seus produtos e serviços </p>
                    </div>
                </div>
                <div class="card col lead my-2 mx-2">
                    <div class="card-header">
                        <img src="../../static/icons/person.png" alt="" class="my-1">
                    </div>
                    <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark w-100 text-center">Foco total no cliente</p>
                    </div>
                </div>
                <div class="card col lead my-2 mx-2">
                    <div class="card-header">
                        <img src="../../static/icons/money.png" alt="" class="my-1">
                    </div>
                    <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark w-100 text-center">O secredo para preços lucrativos</p>
                    </div>
                </div>
                <div class="card col lead d-none d-xl-block my-2 mx-2">
                    <div class="card-header">
                        <img src="../../static/icons/bullseye.png" alt="" class="my-1">
                    </div>
                    <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark w-100 text-center">O que realmente importa para o negócio</p>
                    </div>
                </div>
                <div class="card col lead d-none d-xl-block my-2 mx-2">
                    <div class="card-header">
                        <img src="../../static/icons/graph-up.png" alt="" class="my-1">
                    </div>
                    <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark w-100 text-center">Extraindo o máximo da sua empresa</p>
                    </div>
                </div>
                <div class="card col lead d-none d-xl-block my-2 mx-2">
                    <div class="card-header">
                        <img src="../../static/icons/journal-check.png" alt="" class="my-1">
                    </div>
                    <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark w-100 text-center">Meta: O ponto de equilíbrio</p>
                    </div>
                </div>
            </div>
            <div class="d-md-flex d-block text-light d-xl-none">
                <div class="card col lead my-2 mx-2">
                    <div class="card-header">
                        <img src="../../static/icons/bullseye.png" alt="" class="my-1">
                    </div>
                    <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark w-100 text-center">O que realmente importa para o negócio</p>
                    </div>
                </div>
                <div class="card col lead my-2 mx-2">
                    <div class="card-header">
                        <img src="../../static/icons/graph-up.png" alt="" class="my-1">
                    </div>
                    <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark w-100 text-center">Extraindo o máximo da sua empresa</p>
                    </div>
                </div>
                <div class="card col lead my-2 mx-2">
                    <div class="card-header">
                        <img src="../../static/icons/journal-check.png" alt="" class="my-1">
                    </div>
                    <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark w-100 text-center">Meta: O ponto de equilíbrio</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SucessPillars',
    components: {
    },
    methods: {
    }
}
</script>

<style scoped>
.card{
    border-radius: 20px;
}
.section-values{
    background-color: var(--dark-black);
}

@media screen and (max-width: 1400px) {
    .container-pillars{
        width: 100% !important;
    }
}

@media screen and (max-width: 1200px) {
    .container-pillars{
        width: 90% !important;
    }
}

@media screen and (max-width: 768px) {
    .container-pillars{
        width: 55% !important;
    }
}

</style> 