<template>
    <div class="p-3 my-5">
        <form class="col-10 col-xl-6 p-5 mx-auto my-2 bg-white border-bottom shadow-sm bg-body-tertiary rounded">
            <div class="h1">Perfil</div>
            <div class="m-1 my-3 p-3 border">
                <div class="h4">Alterar Dados Pessoais</div>
                <!-- looping for data profile field-->
                <ProfileDataField
                    v-for="(item, index) in profileDataItems" 
                    :key="index"
                    :profileDataItem="profileItems[index]"
                    v-model="item.model"
                >
                </ProfileDataField>
                <div class="m-1 my-2 d-grid d-md-flex justify-content-end">
                    <SmallButton 
                        smallButtonText="Alterar Dados"
                        @event="$bvModal.show('modalProfileData')"
                    />
                    <b-modal 
                        id="modalProfileData" 
                        ref="modalProfileData"
                        ok-only
                        hide-footer
                        >
                        <div class="d-block">Tem certeza que quer alterar os dados da conta? </div>
                        <div class="d-flex flex-row-reverse w-100 mt-4">
                            <button 
                                @click="updateProfileData();$bvModal.hide('modalProfileData')"
                                class="btn btn-primary m-1" 
                                type="button"
                                >Sim
                            </button>
                            <button 
                                @click="$bvModal.hide('modalProfileData')"
                                class="btn btn-secondary m-1"
                                type="button"
                                >Voltar
                            </button>
                        </div>
                    </b-modal>
                </div>
            </div>
            <div class="m-1 my-2 p-3 border">
                <div class="h4">Alterar Senha</div>
                <!-- looping for password field-->
                <ProfilePasswordField
                    v-for="(item, index) in listPassword" 
                    :key="index"
                    :profilePasswordItem="profilePasswordItems[index]"
                    v-model="item.model"
                >
                </ProfilePasswordField>
                <div class="m-1 my-2 d-grid d-md-flex justify-content-end">
                    <SmallButton 
                        smallButtonText="Alterar Senha"
                        @event="$bvModal.show('modalPassword')"
                    />
                    <b-modal 
                        id="modalPassword" 
                        ref="modalPassword"
                        ok-only
                        hide-footer
                        >
                        <div class="d-block">Tem certeza que quer alterar a senha da conta? </div>
                        <div class="d-flex flex-row-reverse w-100 mt-4">
                            <button 
                                @click="updatePassword();$bvModal.hide('modalPassword')"
                                class="btn btn-primary m-1" 
                                type="button"
                                >Sim
                            </button>
                            <button 
                                @click="$bvModal.hide('modalPassword')"
                                class="btn btn-secondary m-1"
                                type="button"
                                >Voltar
                            </button>
                        </div>
                    </b-modal>
                </div>
            </div>
            <!-- message error for all situations -->
            <MessageWarning :messageWarning="messageWarning"/>
        </form>
    </div>
</template>

<script>
import ProfileDataField from './ProfileDataField.vue';
import ProfilePasswordField from './ProfilePasswordField.vue';
import MessageWarning from '../../MessageWarning.vue'
import SmallButton from '../../SmallButton.vue'
export default {
    name: 'ProfileDataForm',
    components: {
        ProfileDataField
        , ProfilePasswordField
        , MessageWarning
        , SmallButton
    }, 
    data (){
        return{
            // all the data needed from data profile field
            profileItems: [
                'Nome: ',
                'Sobrenome: ',
                'Empresa',
                'E-mail: ',
                'Telefone: '],
            profileDataItems: [
                { model: this.$store.state.firstName },
                { model: this.$store.state.lastName },
                { model: this.$store.state.company },
                { model: this.$store.state.email },
                { model: this.$store.state.phone },                
            ],
            payloadProfileData: [],

            // all the data needed from password field
            profilePasswordItems: [
                'Nova senha: ', 
                'Repita a nova senha: '
            ],
            listPassword: [
                { model: "" },
                { model: "" },
            ],
            payloadPassword: [],
        }
    },
    methods: {

        async updateProfileData(){
            this.payloadProfileData = []
            this.profileDataItems.forEach((item) => {
                this.payloadProfileData.push(item.model);
            });
            // it creates the object that will be use on API
            const dataObject = {
                id: this.$store.state.userId,
                firstName: this.payloadProfileData[0],
                lastName: this.payloadProfileData[1],
                company: this.payloadProfileData[2],
                email: this.payloadProfileData[3],
                phone: this.payloadProfileData[4]
            }
            this.$store.dispatch('updateProfileData', dataObject)
            this.$store.dispatch('hideMessageWarning')
        },

        async updatePassword(){
            this.payloadPassword = []
            // it creates the object that will be use on API
            this.listPassword.forEach((item) => {
                this.payloadPassword.push(item.model);
            });
            const dataObject = {
                id: this.$store.state.userId,
                firstName: this.$store.state.firstName,
                lastName: this.$store.state.lastName,
                email: this.$store.state.email,
                newPassword: this.payloadPassword[0],
                confirmNewPassword: this.payloadPassword[1]
            }
            this.$store.dispatch('updatePassword', dataObject)
            this.$store.dispatch('hideMessageWarning')
            this.listPassword = [
                { model: "" },
                { model: "" },
            ]
        },
    }
}
</script>

<style scoped>
.flex-1 {
  flex: 1 1 auto;
}
</style>