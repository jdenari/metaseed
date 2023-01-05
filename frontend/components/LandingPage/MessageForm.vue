<template>
    <div class="message-form-div container p-5">
        <div class="h1 p-1">DEIXE-ME SABER COMO POSSO TE AJUDAR?</div>
        <div class="container text-center">
            <div class="row text-left">
                <div class="col p-1">
                    <FormField
                        formFieldItem="Nome"
                        v-model="$store.state.lead.name"
                        textAttributeValue="text"
                        placeholderAttributeValue="Como você gostaria de ser chamado"
                    />
                </div>
                <div class="col p-1">
                    <FormField
                    formFieldItem="E-mail"
                    v-model="$store.state.lead.email"
                    textAttributeValue="email"
                    placeholderAttributeValue="nome@minhaempresa.com.br"
                />
                </div>
                <div class="col p-1">
                    <FormField
                    formFieldItem="Telefone"
                    v-model="$store.state.lead.phone"
                    textAttributeValue="number"
                    placeholderAttributeValue="Número com DD para contato"
                />
                </div>
            </div>
        </div>
        <div class="p mt-3 px-0 p-1">Deixe seu comentário aqui:</div>
        <div class="form-floating px-0 d-md-flex p-1">
            <textarea 
                class="form-control form-control-coment" 
                name="comentario" 
                required
                v-model="$store.state.lead.comment"
            ></textarea>
        </div>
        <div class="w-100 d-md-flex justify-content-md-end my-3 p-1">
            <SmallButton 
                smallButtonText="Enviar comentário"
                @event="createLeadObject();$store.dispatch('hideMessageWarning')"
            />
        </div>
        <MessageWarning 
                :messageWarning="this.$store.state.messageWarning"
                class="mt-3"
            />
        <b-modal 
                ref="modalSuccess" 
                ok-only
            > Obrigado pelo comentário! Em breve entraremos em contato. 
        </b-modal>
    </div>
</template>

<script>
import FormField from '../FormField.vue'
import SmallButton from '../SmallButton.vue';
import MessageWarning from '../MessageWarning.vue';
export default {
    name: 'MessageForm',
    components: {
        FormField
        , SmallButton
        , MessageWarning
    },
    methods: {
        createLeadObject(){
            const dataLeadObject = {
                date: new Date(),
                fullName: $store.state.lead.name,
                email: $store.state.lead.email,
                phone: $store.state.lead.phone,
                comment: $store.state.lead.comment
            }
            this.$store.dispatch('sendLeadResponse', dataLeadObject)
        }
    }
}
</script>

<style scoped>
.message-form-div{
    margin-top: 50px;
    margin-bottom: 10px;
}
textarea.form-control-coment{
    height: 200px !important;
}
</style> 