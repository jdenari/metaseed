<template>
    <div class="p-3">
        <form class="col-6 p-3 border m-auto">
            <div class="h1">Perfil</div>
            <div class="m-1 my-2 p-3 border">
                <div class="h4">Dados Pessoais</div>
                <ProfileDataField
                    v-for="(item, index) in profileItems" 
                    :key="index"
                    :profileItem="item"
                    :profileDataItem="num(item)">
                </ProfileDataField>
            </div>
            <div class="m-1 my-2 p-3 border">
                <div class="h4">Alterar Senha</div>
                <ProfilePasswordField
                    v-for="(item, index) in profilePasswordItems" 
                    :key="index"
                    :profilePasswordItem="item">
                </ProfilePasswordField>
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
            profileDataItems: [this.$store.state.userName, this.$store.state.userEmail, this.$store.state.userPhone, 'Denari', 'João'],
            profilePasswordItems: ['Senha atual: ', 'Nova senha: ', 'Repita a nova senha: ']
        }
    },
    methods: {
        num(val) {
        return this.profileDataItems[this.profileItems.findIndex(i => i === val)]
        }
    }
}
</script>

<style scoped>
    
</style>