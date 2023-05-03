<template>
    <div class="mx-3 my-0 p-3 border rounded bg-white border-bottom shadow-sm bg-body-tertiary">
        <div class="p-3">
            <div class="h2 text-center font-weight-bold px-3 pb-3">BANCO DE DADOS</div>
            <div class="table-responsive m-auto text-center">
                <table class="table">
                    <thead class="table-sticky">
                    <tr>
                        <th v-for="(value, key) in headersName" :key="key">{{ value }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in formattedData" :key="index">
                        <td v-for="(value, key) in item" :key="key">{{ value }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="d-md-flex">
            <div class="d-flex flex-row col-md-6 col-12">
                <form enctype="multipart/form-data" class="d-flex align-items-center p-2">
                    <div class="w-100 d-flex flex-row">
                        <label 
                            for="file" 
                            class="label border col-12"
                            > 
                        {{ fileName }}
                        </label>
                        <input 
                            id="file" 
                            type="file"
                            ref="file"
                            @change="selectFile()"
                        >
                    </div>
                    <div class="d-flex">
                        <SmallButton 
                            smallButtonText="Mandar"
                            class="mx-1"
                            @event="sendFileToDatabase"
                        />
                    </div>
                </form>
            </div>
            <div class="d-flex flex-md-row-reverse col-md-6 col-12">
                <SmallButton 
                    smallButtonText="Exportar"
                    class="mr-md-5 my-3"
                    @event="$store.dispatch('exportToExcel', {data: mainData, documentName: 'nome_do_documento'})"
                />  
                <SmallButton 
                    smallButtonText="Atualizar Dados"
                    class="mx-2 my-3"
                    @event="$bvModal.show('modalPassword')"
                />
                <b-modal 
                    id="modalPassword" 
                    ref="modalPassword"
                    ok-only
                    hide-footer
                    >
                    <div class="d-block">Tem certeza que quer atualizar o banco de dados? </div>
                    <div class="d-flex flex-row-reverse w-100 mt-4">
                        <button 
                            @click="getDataFromFacebookAdd();$bvModal.hide('modalPassword')"
                            class="btn btn-primary m-1" 
                            type="button"
                            >Sim
                        </button>
                        <button 
                            @click="$bvModal.hide('modalPassword')"
                            class="btn btn-secondary m-1"
                            type="button"
                            >Voltar
                        </button>
                    </div>
                </b-modal>
            </div>
        </div>
    </div>
</template>
  
<script>
import FilterButtonOutline from '../FilterButtonOutline.vue';
import SmallButton from '../../../SmallButton.vue';
import Papa from 'papaparse';
import moment from 'moment'
  
export default {
    components: {
        FilterButtonOutline,
        SmallButton
    },
    data() {
        return {
            mainData: {},
            show: false,
            headersName: ['ID', 'DATA INÍCIO', 'DATA FINAL', 'REDE', 'ALCANCE', 'IMPRESSÕES', 'CLIQUES', 'CUSTO', 'REP.25%', 'REP.50%', 'REP.75%', 'REP.95%', 'V', 'CICLO', 'CLASS', 'TIPO', 'SEM'],
            startDate: '2022-05-01',
            endDate: '2022-05-30',
            selected: null,
            file: "",
            fileName: "Selecione",
        };
    },
    async mounted() {
        await this.$store.dispatch("getDataDatabase");
        this.mainData = this.$store.state.dataFaceAds.data;
    },
    computed:{
        distinctHeaders() {
            if (Object.keys(this.mainData).length === 0) {
                return [];
            }
            const headers = Object.keys(this.mainData[0]);
            const uniqueHeaders = new Set(headers);
            return Array.from(uniqueHeaders);
        },
        uniqueValues() {
            if (Object.keys(this.mainData).length === 0) {return {};}
            const uniqueValuesObj = {};
            const keys = ['date_start', 'week_number', 'cycle', 'class', 'type'];
            keys.forEach(key => {uniqueValuesObj[key] = Array.from(new Set(this.mainData.map(item => item[key])));});
            return uniqueValuesObj;
        },
        formattedData: function() {
            if (Object.keys(this.mainData).length === 0) {return {};}
            return this.mainData.map(function(element) {
                return Object.assign({}, element, {
                    date_start: moment(element.date_start).format('DD/MM/YYYY'),
                    date_stop: moment(element.date_stop).format('DD/MM/YYYY')
                });
            });
        }
    },
    methods: {
        getDataFromFacebookAdd(){
            this.$store.dispatch('getDataFromFacebookAdd', {startDate: this.startDate,endDate: this.endDate})
        },
        selectFile(){
            this.file = this.$refs.file.files[0];
            this.fileName = this.file.name
        },
        cleanFile(){
            this.file = ""
            this.fileName = "Selecione Arquivo"
        },
        changeScriptFunction(){ 
            this.$store.commit('CHANGE_SCRIPT_FUNCTION', document.getElementById("script-function").value)
        },
        async sendFileToDatabase(){

            const results = await new Promise((resolve) => {
                Papa.parse(this.file, {
                    header: true,
                    delimiter: /[,\t;]/,
                    encoding: 'UTF-16le',
                    complete: (results) => {
                        resolve(results);
                    },
                });
            });

            const filteredResults = results.data.map(obj => ({
                Campanha: obj.Campanha,
                Cliques: obj.Cliques,
                'Impr.': obj['Impr.'],
                Custo: obj.Custo,
                Visualizações: obj.Visualizações,
                'Vídeo assistido até 25%': obj['Vídeo assistido até 25%'],
                'Vídeo assistido até 50%': obj['Vídeo assistido até 50%'],
                'Vídeo assistido até 75%': obj['Vídeo assistido até 75%'],
                'Vídeo assistido até 100%': obj['Vídeo assistido até 100%'],
            }));

            const filteredAndExcludedResults = filteredResults.filter(obj => obj['Impr.'] !== '0');

            filteredAndExcludedResults.pop()

            filteredAndExcludedResults.forEach(obj => {
                const dateStr = this.fileName.match(/\d{8}/)[0];
                const date = new Date(`${dateStr.substring(0, 4)}-${dateStr.substring(4, 6)}-${dateStr.substring(6)}`);
                const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString()}`;
                obj.date_start = formattedDate;
                obj.date_stop = formattedDate;
            });
            
            this.$store.dispatch('treatGoogleData', filteredAndExcludedResults);
        }
    }
};
</script>
  
<style scoped>
table {
    font-size: 11px;
}
.table-responsive {
    height: 700px;
    overflow-x: auto;
}
.table-sticky th {
    position: sticky;
    top: 0;
    background-color: var(--dark-black);
    color: var(--light-white);
}
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
  