<template>
    <div class="message-form-div w-75 m-5 p-3 mx-auto bg-white rounded shadow-sm bg-body-tertiary">
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
        > Obrigado pelo interesse! Em breve entraremos em contato. 
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
    data (){
        return {
            lead: {
                name: this.$store.state.lead.name,
                email: this.$store.state.lead.email,
                phone: this.$store.state.lead.phone,
                comment: this.$store.state.lead.comment
            },
        }
    },
    methods: {
         async createLeadObject(){
            const dataLeadObject = {
                date: new Date(),
                fullName: this.lead.name,
                email: this.lead.email,
                phone: this.lead.phone,
                comment: this.lead.comment
            }
            const response = await this.$store.dispatch('sendLeadResponse', dataLeadObject);
            // if response is 'true', show modal
            if (response) {
                this.$refs['modalSuccess'].show();
                this.lead = {
                    name: '',
                    email: '',
                    phone: '',
                    comment: ''
                }
            }
        }
    }
}
</script>

<style scoped>
textarea.form-control-coment{
    height: 200px !important;
}
</style> 

<style scoped>
/*------------------------------------1600px----------------------------------------------*/ 
@media screen and (max-width: 1600px) {

}
/*-----------------------------------1400px-xxl------------------------------------------*/ 
@media screen and (max-width: 1400px) {

}
/*-----------------------------------1200px-xl-------------------------------------------*/ 
@media screen and (max-width: 1200px) {

}
/*------------------------------------992px-lg-------------------------------------------*/ 
@media screen and (max-width: 992px) {
    
}
/*------------------------------------768px-md-------------------------------------------*/
@media screen and (max-width: 768px) {

}
/*------------------------------------576px-sm-------------------------------------------*/
@media screen and (max-width: 576px) {
    .message-form-div{
        width: 90% !important;
    }
}
</style>
