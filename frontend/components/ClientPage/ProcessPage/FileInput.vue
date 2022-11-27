<template>
    <form class="input-group w-50 p-3 m-auto" enctype="multipart/form-data">
        <input 
            type="file" 
            for="file"
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
            >Enviar
        </button>
    </form>
</template>
<script>
    export default {
        name: 'FileInput',
        data(){
            return {
                file: ""
            }
        },
        methods: {
            selectFile(){
                this.file = this.$refs.file.files[0];
            },
            async sendFile(){
                let formData = new FormData();
                formData.append('file', this.file)
                let res = await fetch(`http://localhost:8000/uploads`, {
                    method: 'POST',
                    body: formData,
                });
                let data = await res.json();
                console.log(data);
            }
        }
    }
</script>