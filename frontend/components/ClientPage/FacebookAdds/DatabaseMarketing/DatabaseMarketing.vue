<template>
    <div class="m-3 border rounded">
        <div class="p-3">
            <h3 class="h4 title-dist-table text-center rounded">BANCO DE DADOS</h3>
            <div class="table-responsive m-auto text-center">
                <table class="table">
                    <thead class="table-sticky">
                    <tr>
                        <th v-for="(value, key) in data[0]" :key="key">{{ key }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in data" :key="index">
                        <td v-for="(value, key) in item" :key="key">{{ value }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="d-flex flex-row-reverse">
            <SmallButton 
            smallButtonText="Exportar"
            class="mx-3 mb-3"
            @event="exportToExcel"
        />  
        </div>
    </div>
</template>
  
<script>
    import FilterButtonOutline from '../FilterButtonOutline.vue';
    import SmallButton from '../../../SmallButton.vue';
    import * as XLSX from 'xlsx';
  
export default {
    components: {
        FilterButtonOutline
        , SmallButton
    },
    data() {
        return {
            data: {},
        };
    },
    async mounted() {
        await this.$store.dispatch("getDataDatabase");
        this.data = this.$store.state.dataFaceAds.data;
    },
    methods: {
        exportToExcel() {
            const worksheet = XLSX.utils.json_to_sheet(this.data);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
            XLSX.writeFile(workbook, 'data.xlsx');
        },
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
        background-color: #fff;
    }
</style>
  