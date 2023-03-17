<template>
    <div class="container-metaseed p-5">
        <div class="h1 mb-5 text-center text-light">OS 6 PILARES DAS EMPRESAS DE SUCESSO</div>
        <div class="container-pillars m-auto text-center p-2">
            <div class="row row-cols-xl-6 row-cols-md-3 row-cols-2 text-light">
                <div class="col mb-4">
                    <div class="card lead">
                        <div class="card-header">
                        <img src="../../static/icons/box.png" alt="" class="my-1">
                        </div>
                        <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark w-100 text-center">Conheça a fundo seus produtos e serviços</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card lead">
                        <div class="card-header">
                        <img src="../../static/icons/person.png" alt="" class="my-1">
                        </div>
                        <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark w-100 text-center">Foco total no cliente</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card lead">
                        <div class="card-header">
                        <img src="../../static/icons/money.png" alt="" class="my-1">
                        </div>
                        <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark w-100 text-center">O secredo para preços lucrativos</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card lead">
                        <div class="card-header">
                        <img src="../../static/icons/bullseye.png" alt="" class="my-1">
                        </div>
                        <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark w-100 text-center">O que realmente importa para o negócio</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card lead">
                        <div class="card-header">
                        <img src="../../static/icons/graph-up.png" alt="" class="my-1">
                        </div>
                        <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark w-100 text-center">Extraindo o máximo da sua empresa</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card lead">
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
    </div>
</template>

<script>
import SucessPillarsCard from './SucessPillarsCard.vue';
export default {
    name: 'SucessPillars',
    components: {
        SucessPillarsCard
    },
    methods: {
    }
}
</script>

<style scoped>
.card{
    border-radius: 20px;
    height: 250px;
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

@media screen and (max-width: 992px) {
    .card{
        border-radius: 10px;
        height: 200px;
}
}

@media screen and (max-width: 768px) {
    .container-pillars{
        width: 95% !important;
    }
}

</style> 