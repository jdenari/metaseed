<template>
    <div class="p-3">
        <form class="login-form col-10 p-3 col-xl-3 col-md-6 border m-auto">
            <!-- all the components when the user is not logged -->
            <div>
                <h4 class="text-center p-2">Iniciar Sessão</h4>
                <MessageWarning 
                :messageWarning="this.$store.state.messageWarning"
                    class="p-3"
                />
                <FormField
                    formFieldItem="E-mail"
                    v-model="auth.email"
                    textAttributeValue="email"
                    placeholderAttributeValue="nome@minhaempresa.com.br"
                />
                <FormField
                    formFieldItem="Senha"
                    v-model="auth.password"
                    textAttributeValue="password"
                    placeholderAttributeValue="********"
                />
                <div class="w-100 d-md-flex justify-content-md-end">
                    <MainButton 
                        @click.native="loginVerification"
                    />
                </div>
                <div class="p mt-3">Não possui uma conta?<NuxtLink to="/"> Preencha o formulário.</NuxtLink></div>
            </div>
        </form>
    </div>
</template>

<script>
import MainButton from '../MainButton.vue'
import FormField from '../FormField.vue'
import MessageWarning from '../MessageWarning.vue'
export default {
    name: 'LoginField',
    components: {
        MainButton
        , FormField
        , MessageWarning
    },
    data() {
       return {
            messageWarning: null,
            auth: {
               email: '',
               password: ''
            }
        }
    },
    methods: {
        async loginVerification(e) {
            // it does not let the page reaload
            e.preventDefault();
            // it creates the object that will be use on API
            const dataObject = {
                email: this.auth.email,
                password: this.auth.password
            }
            this.$store.dispatch('loginVerification', dataObject)
            this.$store.dispatch('hideMessageWarning')
        },
    }
}
</script>

<style scoped>
</style>