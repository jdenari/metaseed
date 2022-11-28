<template>
    <div class="w-50 m-auto">
        <form enctype="multipart/form-data" @submit.prevent="sendFile">
            <div class="">
                <label for="file">Upload File</label>
                <input type="file" ref="file" @change="selectFile">
                <div class="btn btn-primary" @click="selectFile"> 1 </div>
                <div class="btn btn-secondary" @click="sendFile"> 2 </div>
            </div>
        </form>
        <MessageWarning :messageWarning="messageWarning"/>
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
                messageWarning: 'oi'
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

                console.log(file)

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