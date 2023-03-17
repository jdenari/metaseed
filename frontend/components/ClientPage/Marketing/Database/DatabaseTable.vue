<template>
    <div class="m-3 border rounded bg-white border-bottom shadow-sm bg-body-tertiary">
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
                    <tr v-for="(item, index) in mainData" :key="index">
                        <td v-for="(value, key) in item" :key="key">{{ value }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="d-flex flex-row-reverse">
            <SmallButton 
                smallButtonText="Exportar"
                class="mr-5 my-3"
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
</template>
  
<script>
import FilterButtonOutline from '../FilterButtonOutline.vue';
import SmallButton from '../../../SmallButton.vue';
  
export default {
    components: {
        FilterButtonOutline
        , SmallButton
    },
    data() {
        return {
            mainData: {},
            show: false,
            headersName: ['ID', 'DATA DE INÍCIO', 'DATA FINAL', 'ALCANCE', 'IMPRESSÕES', 'CLIQUES', 'CUSTO', 'REP.25%', 'REP.50%', 'REP.75%', 'REP.95%', 'V', 'CICLO', 'CLASS', 'TIPO', 'SEM. ANO'],
            startDate: '2022-05-01',
            endDate: '2022-05-30',
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
            if (Object.keys(this.mainData).length === 0) {return {};
        }
            const uniqueValuesObj = {};
            const keys = ['date_start', 'week_number', 'cycle', 'class', 'type'];
            keys.forEach(key => {uniqueValuesObj[key] = Array.from(new Set(this.mainData.map(item => item[key])));});
            return uniqueValuesObj;
        },
    },
    methods: {
        getDataFromFacebookAdd(){
            this.$store.dispatch('getDataFromFacebookAdd', {startDate: this.startDate,endDate: this.endDate})
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
        width: 1450px;
        overflow-x: auto;
    }
    
    .table-sticky th {
        position: sticky;
        top: 0;
        background-color: var(--dark-black);
        color: var(--light-white);
    }
</style>
  