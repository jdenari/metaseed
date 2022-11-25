<template>
    <div class="p-3">
        <form class="col-6 p-3 border m-auto">
            <div class="h1">Perfil</div>
            <div class="m-1 my-2 p-3 border">
                <div class="h4">Alterar Dados Pessoais</div>
                <ProfileDataField
                    v-for="(item, index) in profileItems" 
                    :key="index"
                    :profileDataItem="item"
                    :profileDataModel="num(item)"
                >
                </ProfileDataField>
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
            </div>
            <div class="p">{{ errorText }}</div>
            <div class="m-1 my-3 d-grid d-md-flex justify-content-md-end">
                <button class="btn btn-primary me-md-2" type="button" @click="updatePassword">Atualizar</button>
            </div>
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
                this.$store.state.firstName, 
                this.$store.state.lastName, 
                this.$store.state.company, 
                this.$store.state.email, 
                this.$store.state.phone
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
        }
    },
    methods: {
        num(val) {
            return this.profileDataItems[this.profileItems.findIndex(i => i === val)]
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
            await fetch("http://localhost:8000/api/user", {
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