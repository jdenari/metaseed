<template>
    <div class="p-3">
        <form class="col-6 p-3 border m-auto">
            <div class="h1">Perfil</div>
            <div class="m-1 my-2 p-3 border">
                <div class="h4">Alterar Dados Pessoais</div>
                <!-- looping for data profile field-->
                <ProfileDataField
                    v-for="(item, index) in profileDataItems" 
                    :key="index"
                    :profileDataItem="profileItems[index]"
                    v-model="item.model"
                >
                </ProfileDataField>
                <div class="m-1 my-2 d-grid d-md-flex justify-content-md-end">
                    <b-button 
                        v-b-modal.modal-1
                        class="btn btn-primary me-md-2"
                        type="button"
                        variant="primary"
                        >Atualizar Senha
                    </b-button>
                    <b-modal 
                        id="modal-1" 
                        title="Atenção!" 
                        hide-footer v-model="showModalDataProfile"
                    >
                        <p class="my-4">Tem certeza que quer mudar o seu cadastro?</p>
                        <div class="d-flex flex-row-reverse w-100">
                            <button 
                                type="button" 
                                class="btn btn-primary m-1" 
                                @click="updateProfileData();hideMessageWarning();showModalDataProfile=false"
                                >Sim
                            </button>
                            <button 
                                type="button" 
                                class="btn btn-secondary m-1" 
                                @click="showModalDataProfile=false"
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
                <div class="m-1 my-2 d-grid d-md-flex justify-content-md-end">
                    <b-button 
                        v-b-modal.modal-2
                        class="btn btn-primary me-md-2"
                        type="button"
                        variant="primary"
                        >Atualizar Senha
                    </b-button>
                    <b-modal 
                        id="modal-2" 
                        title="Atenção!" 
                        hide-footer v-model="showModalPassword"
                    >
                        <p class="my-4">Tem certeza que quer mudar a sua senha?</p>
                        <div class="d-flex flex-row-reverse w-100">
                            <button 
                                type="button" 
                                class="btn btn-primary m-1" 
                                @click="updatePassword();hideMessageWarning();showModalPassword=false"
                                >Sim
                            </button>
                            <button 
                                type="button" 
                                class="btn btn-secondary m-1" 
                                @click="showModalPassword=false"
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
export default {
    name: 'ProfileDataForm',
    components: {
        ProfileDataField
        , ProfilePasswordField
        , MessageWarning
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
                'Senha atual: ', 
                'Nova senha: ', 
                'Repita a nova senha: '
            ],
            errorText: 'No error message',
            listPassword: [
                { model: "" },
                { model: "" },
                { model: "" },
            ],
            payloadPassword: [],
            showModalPassword: false,
            showModalDataProfile: false,
            messageWarning: null,
            messageWarningClass: null
        }
    },
    methods: {

        async updateProfileData(e){
            // it does not let the page reaload
            // e.preventDefault();
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
            const jsonDataObject = JSON.stringify(dataObject)

            // it access the api to update the profile data using token and the object
            await fetch("http://localhost:8000/api/user/profile", {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "auth-token": this.$store.state.token
                },
                body: jsonDataObject
            })
            .then((resp) => resp.json())
            .then((data) => {
                // it prints the message from the backend and it commits all changes made
                this.messageWarning = data.error;
                this.$store.commit("authenticate", {
                    token: data.data.token, 
                    userId: data.data.userId, 
                    firstName: data.data.firstName, 
                    lastName: data.data.lastName,
                    company: data.data.company, 
                    email: data.data.email,
                    phone: data.data.phone
                })
            })
        },

        async updatePassword(e){
            // it does not let the page reaload
            // e.preventDefault();

            // it creates the object that will be use on API
            this.listPassword.forEach((item) => {
                this.payloadPassword.push(item.model);
            });
            const dataObject = {
                id: this.$store.state.userId,
                firstName: this.$store.state.firstName,
                lastName: this.$store.state.lastName,
                email: this.$store.state.email,
                newPassword: this.payloadPassword[1],
                confirmNewPassword: this.payloadPassword[2]
            }
            const jsonDataObject = JSON.stringify(dataObject)

            // it access the api to update the password using token and the object
            await fetch("http://localhost:8000/api/user/password", {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: jsonDataObject
            })
            .then((resp) => resp.json())
            .then((data) => {

                // it prints the message from the backend
                this.messageWarning = data.error;
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
    
</style>