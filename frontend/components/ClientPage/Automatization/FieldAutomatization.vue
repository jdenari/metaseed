<template>
    <div class="input-group d-flex align-items-center p-3 w-75">
        <!-- <b-form-group class="m-0 mx-2" type="file" ref="file" >
            <b-form-file id="file-default"  placeholder="Selecionar Arquivo"></b-form-file>
        </b-form-group>
        <b-form-select v-model="selected" :options="options" class="mx-2"></b-form-select>
        <SmallButton 
            smallButtonText="Acionar"
            class="mx-2"
        /> -->
        <form enctype="multipart/form-data" @submit.prevent="sendFile">
            <label for="file">Upload File</label>
            <input 
                type="file"
                ref="file"
                @change="selectFile()"
            >
            <button>Send</button>
            
        </form>
        <MessageWarning :messageWarning="messageWarning"/>
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
            options: [
                { value: null, text: 'Selecione Script' },
                { value: 'a', text: 'Script 1' },
                { value: 'b', text: 'Script 2' },
                { value: 'c', text: 'Script 3' },
            ],
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

            const fileObject = utils.sheet_to_json(workbook.Sheets.Planilha5)

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

<style scoped>

</style>