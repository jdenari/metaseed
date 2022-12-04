<template>
    <div class="message-form-div container p-3">
        <div class="h1 p-1">DEIXE-ME SABER COMO POSSO TE AJUDAR?</div>
        <div class="container text-center">
            <div class="row text-left">
                <div class="col p-1">
                    <FormField
                        formFieldItem="Nome"
                        textAttributeValue="text"
                        placeholderAttributeValue="Como você gostaria de ser chamado"
                    />
                </div>
                <div class="col p-1">
                    <FormField
                    formFieldItem="E-mail"
                    textAttributeValue="email"
                    placeholderAttributeValue="nome@minhaempresa.com.br"
                />
                </div>
                <div class="col p-1">
                    <FormField
                    formFieldItem="Telefone"
                    textAttributeValue="number"
                    placeholderAttributeValue="Número com DD para contato"
                />
                </div>
            </div>
        </div>
        <div class="p mt-3 px-0 p-1">Deixe seu comentário aqui:</div>
        <div class="form-floating px-0 d-md-flex p-1">
            <textarea class="form-control form-control-coment" name="comentario" required></textarea>
        </div>
        <div class="w-100 d-md-flex justify-content-md-end my-3 p-1">
            <SmallButton smallButtonText="Enviar comentário"/>
        </div>
    </div>
</template>

<script>
import FormField from '../FormField.vue'
import SmallButton from '../SmallButton.vue';
export default {
    name: 'MessageForm',
    components: {
        FormField
        , SmallButton
    },
    methods: {
    }
}
</script>

<style scoped>
.message-form-div{
    margin-top: 80px;
    margin-bottom: 50px;
}
textarea.form-control-coment{
    height: 200px !important;
}
</style> 