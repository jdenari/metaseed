<template>
    <section class="m-auto">
        <div class="form-bg col-10 col-xxl-9 m-auto p-5 bg-white">
            <div class="h1 my-2 text-center">O SEU PONTO DE PARTIDA!</div>
            <div class="h4 my-4 text-center">Aprenda a construir empresas milionárias e garanta o sucesso da sua empresa.</div>
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
                    @event="createLeadObject();$store.dispatch('hideMessageWarning')"
                    id="show-btn"
                    class="my-2"
                />
            </div>
            <MessageWarning 
                :messageWarning="this.$store.state.messageWarning"
                class="mt-3"
            />
            <div>
                <b-modal 
                    ref="modalSuccess" 
                    ok-only
                > Obrigado pelo interesse! Em breve entraremos em contato. 
                </b-modal>
            </div>
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
                name: this.$store.state.lead.name,
                email: this.$store.state.lead.email,
                phone: this.$store.state.lead.phone,
                comment: 'Quero ser cliente!'
            },
        }
    },
    methods: {
        async createLeadObject() {
            const dataLeadObject = {
                date: new Date(),
                fullName: this.lead.name,
                email: this.lead.email,
                phone: this.lead.phone,
                comment: this.lead.comment
            };
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
.form-bg{
    border-radius: 30px;
    margin: 50px auto !important;
}

</style> 



