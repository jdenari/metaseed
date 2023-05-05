<template>
    <div class="m-xl-3 mx-3 p-3 px-5 bg-white border bg-body-tertiary rounded text-center image-container-wrapper">
        <h2 class="text-center mb-3">MAPEAMENTO DE PROCESSOS</h2>
        <div class="image-container border shadow-sm bg-body-tertiary rounded text-center mt-5">
            <h3 class="text-center p-3">Fluxograma</h3>
            <img src="../../../static/mapeamento-de-processos/fluxograma.png" class="mx-auto d-block p-3 w-100">
        </div>
        <div class="image-container border shadow-sm bg-body-tertiary rounded text-center mt-5">
            <h3 class="text-center p-3">Parceria com RTs</h3>
            <img src="../../../static/mapeamento-de-processos/parceria com RTs.png" class="mx-auto d-block p-3 w-100">
        </div>
        <div class="image-container border shadow-sm bg-body-tertiary rounded text-center mt-5">
            <h3 class="text-center mt-5">Sistema Forest Machine</h3>
            <img src="../../../static/mapeamento-de-processos/sistema-forest-machine.png" class="mx-auto d-block p-3 w-100">
        </div>
        <div class="image-container border shadow-sm bg-body-tertiary rounded text-center mt-5">
            <h3 class="text-center mt-5">Banco de Dados</h3>
            <img src="../../../static/mapeamento-de-processos/banco-de-dados.png" class="mx-auto d-block p-3 w-100">
        </div>
    </div>
</template>
  
<script>
    export default {
        name: 'MainProcessMaping',
    }
</script>

<style>
.image-container {
  min-width: 850px;
}

.image-container-wrapper {
  overflow-x: auto !important;
}



</style>