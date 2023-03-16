<template>
    <b-dropdown variant="transparent" no-caret class="perfil-photo">
        <template #button-content>
            <li class="perfil-photo-li nav-item px-1 d-flex align-items-center">
            <b-avatar
                href="#bar"
                src="../static/perfil/joao-vitor-denari-dos-santos.png"
                class="m-1 bg-white"
            ></b-avatar>
            <div class="m-2 text-dark">{{ $store.state.firstName }}</div>
            </li>
        </template>
        <div
            @click="$store.commit('CHANGE_CONTENT_TO_FACEBOOKADDS'); goToHome()"
            class="d-flex align-items-center no-underline"
        >
            <b-dropdown-item href="#" class="w-100">Home</b-dropdown-item>
        </div>
        <b-dropdown-item href="#" @click="$store.commit('CHANGE_CONTENT_TO_PROFILE'); goToHome()">
            Alterar Perfil
        </b-dropdown-item>
        <b-dropdown-item
            @click="$bvModal.show('modalExitHeader')"
            >Sair</b-dropdown-item
        >
        <b-modal
            id="modalExitHeader"
            ref="modalExitHeader"
            ok-only
            hide-footer
        >
            <div class="d-block">Tem certeza que quer sair da sua conta? </div>
            <div class="d-flex flex-row-reverse w-100 mt-4">
                <button
                    @click="$store.commit('DEAUTHENTICATE');$bvModal.hide('modalExitHeader')"
                    class="btn btn-primary m-1"
                    type="button"
                >
                    Sim
                </button>
                <button
                    @click="$bvModal.hide('modalExitHeader')"
                    class="btn btn-secondary m-1"
                    type="button"
                >
                    Voltar
                </button>
            </div>
        </b-modal>
    </b-dropdown>
</template>
  
<script>
    export default {
        name: "PerfilPhotoHeader",
        methods: {
        goToHome() {
            this.$router.push("/client/home");
        },
        },
    };
</script>
  
<style scoped>
    .perfil-photo-li {
        font-size: 20px;
    }
    .perfil-photo {
        border-radius: 30px;
    }
    .perfil-photo:hover {
        transition: 0.3s;
        background-color: var(--light-white);
    }
</style>
  