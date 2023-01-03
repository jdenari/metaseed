<template>
    <div class="in p-3 w-100">    
        <form enctype="multipart/form-data" class="d-flex align-items-center p-2 text-center">
            <div class="w-75 d-flex flex-row">
                <label 
                    for="file" 
                    class="label border col-7"
                    > 
                {{ fileName }}
                </label>
                <select class="bg-light border col-5" id="script-function" @change="changeScriptFunction">
                    <option value="script-01" selected >Script 01</option>
                    <option value="script-02" >Script 02</option>
                    <option value="script-03" >Script 03</option>
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
        <MessageWarning 
            :messageWarning="messageWarning"
            class="text-start m-0 w-75"
        />
    </div>
</template>
<script>
import SmallButton from '../../SmallButton.vue'
import MessageWarning from '../../MessageWarning.vue';
import { read, readFile, utils } from 'xlsx';
export default {
    name: 'FieldAutomatization',
    components: {
        SmallButton
        , MessageWarning
    },
    props: {
    },
    data() {
        return {
            selected: null,
            file: "",
            fileName: "Selecione Arquivo",
            messageWarning: 'result',
            scriptFunction: "script-01"
        }
    },
    methods: {
        selectFile(){
            this.file = this.$refs.file.files[0];
            this.fileName = this.file.name
        },
        changeScriptFunction(){
            this.scriptFunction = document.getElementById("script-function").value;
        },
        cleanFile(){
            this.file = ""
            this.fileName = "Selecione Arquivo"
        },
        async sendFile(){   
            const data = await this.file.arrayBuffer();
            const workbook = read(data);
            const fileObject = utils.sheet_to_json(workbook.Sheets.Planilha)
            const file = JSON.stringify(fileObject)

            await fetch(`https://metaseed.online/api/automatization/uploads/${this.scriptFunction}`, {
            // await fetch(`http://localhost:5000/api/automatization/uploads/${this.scriptFunction}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: file
            })
            .then((resp) => resp.json())
            .then((data) => {
                // it prints the message from the backend
                this.messageWarning = data;
            })
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
</style>