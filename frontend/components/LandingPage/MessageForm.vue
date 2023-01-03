<template>
    <div class="message-form-div container p-5">
        <div class="h1 p-1">DEIXE-ME SABER COMO POSSO TE AJUDAR?</div>
        <div class="container text-center">
            <div class="row text-left">
                <div class="col p-1">
                    <FormField
                        formFieldItem="Nome"
                        v-model="lead.name"
                        textAttributeValue="text"
                        placeholderAttributeValue="Como você gostaria de ser chamado"
                    />
                </div>
                <div class="col p-1">
                    <FormField
                    formFieldItem="E-mail"
                    v-model="lead.email"
                    textAttributeValue="email"
                    placeholderAttributeValue="nome@minhaempresa.com.br"
                />
                </div>
                <div class="col p-1">
                    <FormField
                    formFieldItem="Telefone"
                    v-model="lead.phone"
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
                v-model="lead.comment"
            ></textarea>
        </div>
        <div class="w-100 d-md-flex justify-content-md-end my-3 p-1">
            <SmallButton 
                smallButtonText="Enviar comentário"
                @event="sendLeadResponse();hideMessageWarning()"
            />
        </div>
        <MessageWarning 
                :messageWarning="messageWarning"
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
    data(){
        return {
            lead: {
                name: null,
                email: null,
                phone: null,
                comment: null,
            },
            messageWarning: null,
        }
    },
    methods: {
        async sendLeadResponse(){
        // it creates the object that will be use on API
        const dataObject = {
            date: new Date(),
            fullName: this.lead.name,
            email: this.lead.email,
            phone: this.lead.phone,
            comment: this.lead.comment
        }

        console.log(dataObject)
        const jsonDataObject = JSON.stringify(dataObject)

        // it access the api to update the profile data using token and the object
        await fetch("https://metaseed.online/api/lead/leadResponse", {
        // await fetch("http://localhost:5000/api/lead/leadResponse", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: jsonDataObject
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (data.error) {
                    this.messageWarning = data.error;
                } else {
                    this.$refs['modalSuccess'].show()
                    this.lead.name = null
                    this.lead.email = null
                    this.lead.phone = null
                    this.lead.comment = null
                }
            })
        },
        hideMessageWarning(){
            setTimeout(() => { 
                this.messageWarning = null
            }, 5000)
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