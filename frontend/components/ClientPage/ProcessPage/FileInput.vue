<template>
    <div class="w-50 m-auto p-3">
        <form enctype="multipart/form-data" @submit.prevent="sendFile" class="input-group">
                <input 
                    type="file" 
                    ref="file" 
                    class="form-control" 
                    id="inputGroupFile04" 
                    aria-describedby="inputGroupFileAddon04" 
                    aria-label="Upload" 
                    @change="selectFile"
                >
                <button 
                    class="btn btn-outline-secondary" 
                    type="button" 
                    id="inputGroupFileAddon04" 
                    @click="sendFile"
                >Button</button>
        </form>
        <MessageWarning :messageWarning="messageWarning" class="p-3"/>
    </div>
    
</template>
<script>
import MessageWarning from '../../MessageWarning.vue'
import { read, readFile, utils } from 'xlsx';
    export default {
        name: 'FileInput',
        components: {
            MessageWarning
        },
        data(){
            return {
                file: "",
                messageWarning: 'Aguardando Resposta '
            }
        },
        methods: {
            selectFile(){
                this.file = this.$refs.file.files[0];
            },
            async sendFile(){       
                
                const data = await this.file.arrayBuffer();

                const workbook = read(data);

                const fileObject = utils.sheet_to_json(workbook.Sheets.Sheet1);

                const file = JSON.stringify(fileObject)

                await fetch("http://localhost:8000/api/automatization/uploads", {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "auth-token": this.$store.state.token
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