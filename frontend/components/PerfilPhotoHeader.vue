<template>
    <b-dropdown variant="transparent" no-caret class="perfil-photo">
        <template #button-content>
            <li class="perfil-photo-li nav-item px-1 d-flex align-items-center">
                <b-avatar 
                    href="#bar" 
                    src="../static/perfil/joao-vitor-denari-dos-santos.png"
                    class="m-1 bg-white"
                ></b-avatar>
                <div class="m-2 text-dark"> {{ $store.state.firstName }}</div>
            </li>
        </template>
        <b-dropdown-item href="#" @click="$store.commit('changeContentToProfile')">Alterar Perfil</b-dropdown-item>
        <b-dropdown-item 
            v-b-modal.modalExitHeader
            >Sair
        </b-dropdown-item>
        <ModalYesNo 
            textModalYesNo="Tem certeza que quer sair da sua conta?"
            idModalYesNo="modalExitHeader"
            @eventYes="$store.commit('deauthenticate');$bvModal.hide('modalExitHeader');hideMessageWarning()"
            @eventNo="$bvModal.hide('modalExitHeader')"
        />
  </b-dropdown>
</template>
<script>
import ModalYesNo from './ModalYesNo.vue';
export default {
    name: 'PerfilPhotoHeader',
    components: {
        ModalYesNo
    }
}
</script>
<style scoped>
.perfil-photo-li{
    font-size: 20px;
}
.perfil-photo{
    border-radius: 30px;
}
.perfil-photo:hover{
    transition: 0.3s;
    background-color: var(--light-white)
}
</style>