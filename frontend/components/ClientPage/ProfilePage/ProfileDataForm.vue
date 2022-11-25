<template>
    <div class="p-3">
        <form class="col-6 p-3 border m-auto">
            <div class="h1">Perfil</div>
            <div class="m-1 my-2 p-3 border">
                <div class="h4">Alterar Dados Pessoais</div>
                <ProfileDataField
                    v-for="(item, index) in profileDataItems" 
                    :key="index"
                    :profileDataItem="profileItems[index]"
                    v-model="item.model"
                >
                </ProfileDataField>
                <div class="m-1 my-2 d-grid d-md-flex justify-content-md-end">
                    <button class="btn btn-primary me-md-2" type="button" @click="updateProfileData">Atualizar Dados</button>
                </div>
            </div>
            <div class="m-1 my-2 p-3 border">
                <div class="h4">Alterar Senha</div>
                <ProfilePasswordField
                    v-for="(item, index) in listPassword" 
                    :key="index"
                    :profilePasswordItem="profilePasswordItems[index]"
                    v-model="item.model"
                >
                </ProfilePasswordField>
                <div class="m-1 my-2 d-grid d-md-flex justify-content-md-end">
                    <button class="btn btn-primary me-md-2" type="button" @click="updatePassword">Atualizar Senha</button>
                </div>
            </div>
            <div class="p">{{ errorText }}</div>
        </form>
    </div>
</template>

<script>
import ProfileDataField from './ProfileDataField.vue';
import ProfilePasswordField from './ProfilePasswordField.vue';
export default {
    name: 'ProfileDataForm',
    components: {
        ProfileDataField
        , ProfilePasswordField
    }, 
    data (){
        return{
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
            payloadProfileData: [],
        }
    },
    methods: {

        async updateProfileData(){
            // e.preventDefault();

            this.profileDataItems.forEach((item) => {
                this.payloadProfileData.push(item.model);
            });

            const dataObject = {
                id: this.$store.state.userId,
                firstName: this.payloadProfileData[0],
                lastName: this.payloadProfileData[1],
                company: this.payloadProfileData[2],
                email: this.payloadProfileData[3],
                phone: this.payloadProfileData[4]
            }
            const jsonDataObject = JSON.stringify(dataObject)
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
                this.errorText = data.error;
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

            e.preventDefault();
                        
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
            await fetch("http://localhost:8000/api/user/password", {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "auth-token": this.$store.state.token
                },
                body: jsonDataObject
            })
            .then((resp) => resp.json())
            .then((data) => {
                if(data.error){
                    this.errorText = data.error;
                } else {
                    this.errorText = data.error;
                }
            })
        },
    }
}
</script>

<style scoped>
    
</style>