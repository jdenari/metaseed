<template>
    <div class="in p-3 w-100">    
        <div class="h5 px-2 mt-3">Soma de coluna em tabela Excel:</div>
        <form enctype="multipart/form-data" class="d-flex align-items-center p-2">
            <div class="w-75 d-flex flex-row">
                <label 
                    for="file" 
                    class="label border col-7"
                    > 
                {{ fileName }}
                </label>
                <select class="bg-light border col-5" id="script-function" @change="changeScriptFunction">
                    <option value="script-01" selected >Script 01</option>
                </select>
                <input 
                    id="file" 
                    type="file"
                    ref="file"
                    @change="selectFile()"
                >
            </div>
            <div class="d-flex">
                <SmallButton 
                    smallButtonText="Limpar"
                    class="bg-secondary ml-4 mx-1"
                    @event="cleanFile"
                />   
                <SmallButton 
                    smallButtonText="Acionar"
                    class="mx-1"
                    @event="sendFile"
                />
            </div>
        </form>
        <div class="h5 px-2 mt-3">Envio de e-mail automático:</div>
        <form enctype="multipart/form-data" class="d-flex align-items-center p-2 text-center">
            <div class="w-75 d-flex flex-row">
                <input 
                    type="email" 
                    class="form-control input-field" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    placeholder="Adicione uma conta g-mail aqui!"
                    v-model="emailContact"
                >
                <select class="bg-light border col-5" id="script-function" @change="changeScriptFunction">
                    <option value="script-01" selected >Script 02</option>
                </select>
                <input 
                    id="file" 
                    type="file"
                    ref="file"
                    @change="sendEmail();"
                >
            </div>
            <div class="d-flex">
                <SmallButton 
                    smallButtonText="Limpar"
                    class="bg-secondary ml-4 mx-1"
                    @event="cleanFile"
                />   
                <SmallButton 
                    smallButtonText="Acionar"
                    class="mx-1"
                    @event="changeEmailContact();sendEmail()"
                />
            </div>
        </form>
        <div class="h5 px-2 mt-3">Automatização via controle de teclado e mouse:</div> -->
        <!-- <form enctype="multipart/form-data" class="d-flex align-items-center p-2 text-center">
            <div class="w-75 d-flex flex-row">
                <input 
                    type="email" 
                    class="form-control input-field" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    placeholder="Desabilitado"
                    disabled
                >
                <select class="bg-light border col-5" id="script-function" @change="changeScriptFunction">
                    <option value="script-01" selected >Script 03</option>
                </select>
                <input 
                    id="file" 
                    type="file"
                    ref="file"
                    @change="selectFile()"
                >
            </div>
            <div class="d-flex">
                <SmallButton 
                    smallButtonText="Limpar"
                    class="bg-secondary ml-4 mx-1"
                    @event="cleanFile"
                />   
                <SmallButton 
                    smallButtonText="Acionar"
                    class="mx-1"
                    @event="sendFile"
                />
            </div>
        </form> -->
        <MessageWarning 
            :messageWarning="this.$store.state.messageWarning"
            class="text-start m-0 w-75"
        />
    </div>
</template>
<script>
import SmallButton from '../../SmallButton.vue'
import { read, utils } from 'xlsx';
export default {
    name: 'FieldAutomatization',
    components: {
        SmallButton
    },
    props: {
    },
    data() {
        return {
            selected: null,
            file: "",
            fileName: "Selecione Arquivo",
            emailContact: ''
        }
    },
    methods: {
        selectFile(){
            this.file = this.$refs.file.files[0];
            this.fileName = this.file.name
        },
        changeScriptFunction(){ 
            this.$store.commit('CHANGE_SCRIPT_FUNCTION', document.getElementById("script-function").value)
        },
        cleanFile(){
            this.file = ""
            this.fileName = "Selecione Arquivo"
        },
        async sendFile(){   
            const data = await this.file.arrayBuffer();
            const workbook = read(data);
            const fileObject = utils.sheet_to_json(workbook.Sheets.Planilha)
            this.$store.dispatch('sendFile', fileObject)
        },
        changeEmailContact(){
            this.$store.commit('CHANGE_EMAIL_CONTACT', this.emailContact)
        },
        async sendEmail(){
            this.$store.dispatch('sendEmail', this.emailContact)
        }
    }
}
</script>

<style scoped>
input[type='file'] {
    display: none
}
label{
    margin: 0px;
    padding: 8px;
    border-radius: 12px 0px 0px 12px
}
select{
    height: 42px;
    padding: 8px;
    border: 0px;
    border-radius: 0px 12px 12px 0px
}
.input-field{
    height: 42px;
}
</style>