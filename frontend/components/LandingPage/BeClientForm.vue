<template>
    <section class="m-auto">
        <div class="w-75 m-auto p-5">
            <div class="h1 my-2">O seu ponto de partida!</div>
            <div class="h3 my-5">Aprenda a construir empresas milionárias e garanta o sucesso da sua empresa.</div>
            <FormField
                formFieldItem="Nome"
                v-model="auth.nome"
                textAttributeValue="text"
                placeholderAttributeValue="Como você gostaria de ser chamado"
            />
            <FormField
                formFieldItem="E-mail"
                v-model="auth.email"
                textAttributeValue="email"
                placeholderAttributeValue="nome@minhaempresa.com.br"
            />
            <FormField
                formFieldItem="Telefone"
                v-model="auth.telefone"
                textAttributeValue="number"
                placeholderAttributeValue="Número com DD para contato"
            />
            <div class="w-100 d-md-flex justify-content-md-end">
                <SmallButton smallButtonText="Quero ser cliente →"/>
            </div>
        </div>
        
    </section>
</template>

<script>
import FormField from '../FormField.vue'
import SmallButton from '../SmallButton.vue'
export default {
    name: 'BeClientForm',
    components: {
        FormField,
        SmallButton
    },
    data (){
        return {
            auth: {
                nome: null,
                email: null,
                phone: null
            }
        }
    },
    methods: {
    }
}
</script>

<style scoped>


</style> 



