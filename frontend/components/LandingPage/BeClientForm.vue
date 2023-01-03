<template>
    <section class="m-auto">
        <div class="form-bg col-10 col-xxl-9 m-auto p-5 bg-white">
            <div class="h1 my-2">O SEU PONTO DE PARTIDA!</div>
            <div class="h3 my-5">Aprenda a construir empresas milionárias e garanta o sucesso da sua empresa.</div>
            <FormField
                formFieldItem="Nome"
                v-model="lead.name"
                textAttributeValue="text"
                placeholderAttributeValue="Como você gostaria de ser chamado"
            />
            <FormField
                formFieldItem="E-mail"
                v-model="lead.email"
                textAttributeValue="email"
                placeholderAttributeValue="nome@minhaempresa.com.br"
            />
            <FormField
                formFieldItem="Telefone"
                v-model="lead.phone"
                textAttributeValue="text"
                placeholderAttributeValue="Número com DD para contato"
            />
            <div class="w-100 d-md-flex justify-content-md-end">
                <SmallButton 
                    smallButtonText="Quero ser cliente →"
                    @event="sendLeadResponse();hideMessageWarning()"
                    id="show-btn"
                />
            </div>
            <MessageWarning 
                :messageWarning="messageWarning"
                class="mt-3"
            />
            <b-modal 
                ref="modalSuccess" 
                ok-only
            > Obrigado pelo interesse! Em breve entraremos em contato. 
            </b-modal>
        </div>
    </section>
</template>

<script>
import FormField from '../FormField.vue'
import SmallButton from '../SmallButton.vue'
import MessageWarning from '../MessageWarning.vue'
export default {
    name: 'BeClientForm',
    components: {
        FormField
        , SmallButton
        , MessageWarning
    },
    data (){
        return {
            lead: {
                name: null,
                email: null,
                phone: null,
                comment: "Quero ser cliente!"
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
                if (data.error) {this.messageWarning = data.error;}
                else {
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
.form-bg{
    border-radius: 30px;
    margin: 50px auto !important;
}

</style> 



