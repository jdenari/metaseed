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
                    v-for="(item, index) in profilePasswordItems" 
                    :key="index"
                    :profilePasswordItem="item"
                    v-model="passaword"
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
            profileItems: ['Nome: ', 'Sobrenome: ', 'Empresa', 'E-mail: ', 'Telefone: '],
            profileDataItems: [this.$store.state.firstName, this.$store.state.lastName, this.$store.state.company, this.$store.state.email, this.$store.state.phone],
            profilePasswordItems: ['Senha atual: ', 'Nova senha: ', 'Repita a nova senha: '],
            profilePasswordInput: ['a', 'b', 'c'],
            newPassword: '',
            confirmNewPassword: '',
            errorText: 'No error message',
        }
    },
    methods: {
        num(val) {
        return this.profileDataItems[this.profileItems.findIndex(i => i === val)]
        },
        async updatePassword(){
            e.preventDefault();
            console.log(this.teste1)
            console.log(this.teste2)
            // const dataObject = {
            //     newPassword: this.newPassword,
            //     confirmNewPassword: this.confirmNewPassword
            // }
            // const jsonDataObject = JSON.stringify(dataObject)
            // await fetch("http://localhost:6789/api/auth/login", {
            //     method: "POST",
            //     headers: {"Content-type": "application/json"},
            //     body: jsonDataObject
            // })
            // .then((resp) => resp.json())
            // .then((data) => {
            //     if(data.error){
            //         this.errorText = data.error;
            //     } else {
            //         this.$store.commit("updatePassword", {
            //             token: data.token, 
            //             userId: data.userId, 
            //             firstName: data.firstName, 
            //             lastName: data.lastName,
            //             company: data.company, 
            //             email: data.email,
            //             phone: data.phone
            //         })
            //     }
            // })
        },
    }
}
</script>

<style scoped>
    
</style>