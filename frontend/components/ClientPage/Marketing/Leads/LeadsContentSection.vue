<template>
    <div>
        <div class="border rounded bg-light-white mx-3 my-0 p-3">
            <div class="h2 text-center font-weight-bold px-3">FILTROS</div>
            <CalendarData
                :start-date="startDate"
                :end-date="endDate"
                @update:start-date="startDate = $event"
                @update:end-date="endDate = $event"
            />
            <div class="d-md-flex d-block">
                <div class="m-1">
                    <h6 class="px-1">TIPO</h6>
                    <div class="d-flex">
                        <div v-for="(value, index) in uniqueValues.type" :key="'type-' + index">
                            <FilterButtonOutline
                                v-bind:FilterButtonOutlineText="value"
                                v-on:event="handleFilter('type', value)"
                                v-bind:isActive="uniqueValues.type[value]"
                            />
                        </div>
                    </div>
                </div>
                <div class="m-1">
                    <h6 class="px-1">CLASSE</h6>
                    <div class="d-md-flex d-block">
                        <div v-for="(value, index) in uniqueValues.class" :key="'class-' + index">
                            <FilterButtonOutline
                                v-bind:FilterButtonOutlineText="value"
                                v-on:event="handleFilter('class', value)"
                                v-bind:isActive="uniqueValues.class[value]"
                            />
                        </div>
                    </div>
                </div>
                <div class="m-1">
                    <h6 class="px-1">CICLO</h6>
                    <div class="d-md-flex d-block">
                        <div v-for="(value, index) in uniqueValues.cycle" :key="'type-' + index">
                            <FilterButtonOutline
                                v-bind:FilterButtonOutlineText="value"
                                v-on:event="handleFilter('cycle', value)"
                                v-bind:isActive="uniqueValues.cycle[value]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border rounded bg-light-white m-3 p-3">
            <div class="h2 text-center font-weight-bold px-3 pb-3">RESUMO DISTRIBUIÇÃO DE CONTEÚDO</div>
            <div class="border bg-white p-3 my-1">
                <div class="row">
                    <div class="col-md-6">
                        <div class="h5 text-center">FB</div>
                        <table class="table table-dist-content text-center mx-auto border">
                            <thead>
                                <tr class="bg-dark-black text-light-white">
                                    <th v-for="(column, index) in headerTableFB25" :key="'header-' + index">{{ column }}</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(row, rowIndex) in dataLeads" :key="'row-' + rowIndex">
                                    <td v-for="(column, columnIndex) in columnsTableFB25" :key="'cell-' + rowIndex + '-' + columnIndex" class="p-0 px-2">{{ row[column] }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-6">
                        <div class="h5 text-center">IG</div>
                        <table class="table table-dist-content text-center mx-auto border">
                            <thead>
                                <tr class="bg-dark-black text-light-white">
                                    <th v-for="(column, index) in headerTableFB25" :key="'header-' + index">{{ column }}</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(row, rowIndex) in dataLeads" :key="'row-' + rowIndex">
                                    <td v-for="(column, columnIndex) in columnsTableFB25" :key="'cell-' + rowIndex + '-' + columnIndex" class="p-0 px-2">{{ row[column] }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="h5 text-center">GOOGLE</div>
                        <table class="table table-dist-content text-center mx-auto border">
                            <thead>
                                <tr class="bg-dark-black text-light-white">
                                    <th v-for="(column, index) in headerTableFB25" :key="'header-' + index">{{ column }}</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(row, rowIndex) in dataLeads" :key="'row-' + rowIndex">
                                    <td v-for="(column, columnIndex) in columnsTableFB25" :key="'cell-' + rowIndex + '-' + columnIndex" class="p-0 px-2">{{ row[column] }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-6">
                        <div class="h5 text-center">YOUTUBE</div>
                        <table class="table table-dist-content text-center mx-auto border">
                            <thead>
                                <tr class="bg-dark-black text-light-white">
                                    <th v-for="(column, index) in headerTableFB25" :key="'header-' + index">{{ column }}</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(row, rowIndex) in dataLeads" :key="'row-' + rowIndex">
                                    <td v-for="(column, columnIndex) in columnsTableFB25" :key="'cell-' + rowIndex + '-' + columnIndex" class="p-0 px-2">{{ row[column] }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-6">
                        <div class="h5 text-center">TOTAL</div>
                        <table class="table table-dist-content text-center mx-auto border">
                            <thead>
                                <tr class="bg-dark-black text-light-white">
                                    <th v-for="(column, index) in headerTableFB25" :key="'header-' + index">{{ column }}</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(row, rowIndex) in dataLeads" :key="'row-' + rowIndex">
                                    <td v-for="(column, columnIndex) in columnsTableFB25" :key="'cell-' + rowIndex + '-' + columnIndex" class="p-0 px-2">{{ row[column] }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-row-reverse">
                <SmallButton 
                    smallButtonText="Exportar"
                    class="mx-3 m-3"
                    @event="$store.dispatch('exportToExcel', {data: dataContentDistribution, documentName: 'nome_do_documento'})"
                />  
            </div>
        </div>
    </div>
</template>
  
<script>
    import CalendarData from '../CalendarData.vue';
    import FilterButtonOutline from '../FilterButtonOutline.vue';
    export default {
        name: "LeadsContentSection",
        components: {
            CalendarData
            , FilterButtonOutline
        },
        data(){
            return {
                mainData: null,
                headerTableFB25: ['Data', 'Clicks', 'Custo', 'Custo/Cliques'],
                columnsTableFB25: [ 'date','clicks', 'spend', 'spendClicks'],
                startDate: '2022-05-01',
                endDate: '2022-05-30',
                activatedFilters: {},
            }
        },
        async mounted() {
            await this.$store.dispatch('getDataDatabase')
            this.mainData = this.$store.state.dataFaceAds.data;
            this.createObjectFilters()
        },
        computed: {
            // it returns a array with all headers in main data
            uniqueValues() {
                if (!this.mainData || Object.keys(this.mainData).length === 0) {return [];}

                const uniqueValuesObj = {};
                const keys = ['date_start', 'week_number', 'cycle', 'class', 'type'];
                keys.forEach(key => {uniqueValuesObj[key] = Array.from(new Set(this.mainData.map(item => item[key])));});
                return uniqueValuesObj;
            },
            
            dataTreated() {
                if (!this.mainData || Object.keys(this.mainData).length === 0) {return [];}
                if (Object.keys(this.activatedFilters).length === 0) {return {};}

                let dataTreated = [];

                dataTreated = this.mainData
                    .filter(element => {
                        let shouldAdd = true;
                        for (const e in Object.values(this.activatedFilters.cycle)) {
                            if (Object.values(this.activatedFilters.cycle)[e] === false) {
                                if (Object.keys(this.activatedFilters.cycle)[e] == element.cycle) {
                                    shouldAdd = false;
                                }
                            }
                        }
                        for (const e in Object.values(this.activatedFilters.class)) {
                            if (Object.values(this.activatedFilters.class)[e] === false) {
                                if (Object.keys(this.activatedFilters.class)[e] == element.class) {
                                    shouldAdd = false;
                                }
                            }
                        }
                        for (const e in Object.values(this.activatedFilters.type)) {
                            if (Object.values(this.activatedFilters.type)[e] === false) {
                                if (Object.keys(this.activatedFilters.type)[e] == element.type) {
                                    shouldAdd = false;
                                }
                            }
                        }
                        return shouldAdd;
                    })
                    .map(element => {
                        const dataTreatedElement = { ...element };
                        return dataTreatedElement;
                    });

                return dataTreated;
            },

            dataLeads(){
                if (!this.mainData || Object.keys(this.mainData).length === 0) {return {};}
                const dataLeads = {};
                
                this.uniqueValues.date_start.forEach(date => {
                    dataLeads[date] = {
                        date: new Date(date).toLocaleDateString('pt-BR'),
                        clicks: 0,
                        spend: 0,
                        spendClicks: 0,
                    };
                    console.log(this.dataTreated[0].date_start)
                    console.log(date)
                    this.dataTreated.filter(element => element.date_start === date)
                    .forEach(element => {
                        
                        dataLeads[date].clicks += Number(element.clicks);
                        dataLeads[date].spend += Number(element.spend); 
                    });

                    dataLeads[date].clicks = Math.round(dataLeads[date].clicks).toLocaleString();
                    dataLeads[date].spend = dataLeads[date].spend.toFixed(2);
                    if (dataLeads[date].clicks > 0) {dataLeads[date].spendClicks = (dataLeads[date].spend / dataLeads[date].clicks).toFixed(2);} else {dataLeads[date].spendClicks = 0;}
                })
                return dataLeads
            }
        },
        methods: {
            // change the filters to false or true and reload the main function
            handleFilter(header, value) {
                this.activatedFilters[header][value] = !this.activatedFilters[header][value];
                this.dataTreated;
            },
            // create filters to be used on tables on load page
            createObjectFilters(){
                if (Object.keys(this.uniqueValues).length === 0) {return {};}

                const filters = {class: {},type: {},cycle: {}};
                this.uniqueValues.class.forEach(value => {filters.class[value] = true;});
                this.uniqueValues.type.forEach(value => {filters.type[value] = true;});
                this.uniqueValues.cycle.forEach(value => {filters.cycle[value] = true;});
                this.activatedFilters = filters
            },
        }
    };
</script>
  
<style>
.div-para-mudar{
    height: 900px;
}
</style>

<style scoped>
/*------------------------------------1600px----------------------------------------------*/ 
@media screen and (max-width: 1600px) {
    .d-flex {
    flex-wrap: wrap;
  }
  .m-auto {
    flex-basis: 33.33%;
  }
}
/*-----------------------------------1400px-xxl------------------------------------------*/ 
@media screen and (max-width: 1400px) {
}
/*-----------------------------------1200px-xl-------------------------------------------*/ 
@media screen and (max-width: 1200px) {
}
/*------------------------------------992px-lg-------------------------------------------*/ 
@media screen and (max-width: 992px) {
}
/*------------------------------------768px-md-------------------------------------------*/
@media screen and (max-width: 768px) {
    .d-flex {
    flex-wrap: wrap;
  }
  .m-auto {
    flex-basis: 50%;
  }
}
/*------------------------------------576px-sm-------------------------------------------*/
@media screen and (max-width: 576px) {
    .d-flex {
    flex-wrap: wrap;
  }
  .m-auto {
    flex-basis: 100%;
  }
}
</style>
  