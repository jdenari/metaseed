<template>
    <div class="bg-dark p-5">
        <div class="h1 mb-5 text-center text-light">OS 6 PILARES DAS EMPRESAS DE SUCESSO</div>
        <div class="w-75 m-auto text-center p-2">
            <div class="row row-cols-auto text-light my-4">
                <div class="card col lead mx-3">
                    <div class="card-header">
                        <img src="../../static/icons/box.png" alt="" class="my-1">
                    </div>
                    <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark"> Conheça a fundo seus produtos e serviços </p>
                    </div>
                </div>
                <div class="card col lead mx-3">
                    <div class="card-header">
                        <img src="../../static/icons/person.png" alt="" class="my-1">
                    </div>
                    <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark">Foco total no cliente</p>
                    </div>
                </div>
                <div class="card col lead mx-3">
                    <div class="card-header">
                        <img src="../../static/icons/money.png" alt="" class="my-1">
                    </div>
                    <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark">O secredo para preços lucrativos</p>
                    </div>
                </div>
                <div class="card col lead d-none d-xl-block mx-3">
                    <div class="card-header">
                        <img src="../../static/icons/bullseye.png" alt="" class="my-1">
                    </div>
                    <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark">O que realmente importa para o negócio</p>
                    </div>
                </div>
                <div class="card col lead d-none d-xl-block mx-3">
                    <div class="card-header">
                        <img src="../../static/icons/graph-up.png" alt="" class="my-1">
                    </div>
                    <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark">Extraindo o máximo da sua empresa</p>
                    </div>
                </div>
                <div class="card col lead d-none d-xl-block mx-3">
                    <div class="card-header">
                        <img src="../../static/icons/journal-check.png" alt="" class="my-1">
                    </div>
                    <div class="card-body p-1 d-flex align-items-center my-5">
                        <p class="card-text text-dark">Meta: O ponto de equilíbrio</p>
                    </div>
                </div>
            </div>
            <div class="row row-cols-auto text-light d-xl-none mt-5">
                <div class="col lead">O que realmente importa para o negócio</div>
                <div class="col lead">Extraindo o máximo da sua empresa</div>
                <div class="col lead">Meta: O ponto de equilíbrio</div>
            </div>
        </div>
    </div>
</template>

<script>
import CardSucessPillars from './CardSucessPillars.vue';
export default {
    name: 'SucessPillars',
    components: {
        CardSucessPillars
    },
    methods: {
    }
}
</script>

<style scoped>
.card{
    border-radius: 20px;
}

</style> 