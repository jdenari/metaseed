<template>
    <div>
        <div class="border rounded bg-light-white mx-3 my-0 p-3">
            <div class="h2 text-center font-weight-bold px-3">FILTROS</div>
            <div class="h6 text-center px-3"> {{ this.textFiltersActivated[0] }}</div>
            <CalendarData
                :start-date="startDate"
                :end-date="endDate"
                @update:start-date="startDate = $event"
                @update:end-date="endDate = $event"
            />
            <div class="d-md-flex d-block">
                <div class="m-1">
                    <h6 class="px-1">REDE SOCIAL</h6>
                    <div class="d-flex">
                        <div v-for="(value, index) in uniqueValues.social_network" :key="'type-' + index">
                            <FilterButtonOutline
                                v-bind:FilterButtonOutlineText="value.toUpperCase()"
                                v-on:event="handleFilter('social_network', value)"
                                v-bind:isActive="uniqueValues.social_network[value]"
                            />
                        </div>
                    </div>
                </div>
                <div class="m-1">
                    <h6 class="px-1">TIPO</h6>
                    <div class="d-flex">
                        <div v-for="(value, index) in uniqueValues.type" :key="'type-' + index">
                            <FilterButtonOutline
                                v-bind:FilterButtonOutlineText="value.toUpperCase()"
                                v-on:event="handleFilter('type', value)"
                                v-bind:isActive="uniqueValues.type[value]"
                            />
                        </div>
                    </div>
                </div>
                <div class="m-1">
                    <h6 class="px-1">CLASSE</h6>
                    <div class="d-flex">
                        <div v-for="(value, index) in uniqueValues.class" :key="'class-' + index">
                            <FilterButtonOutline
                                v-bind:FilterButtonOutlineText="value.toUpperCase()"
                                v-on:event="handleFilter('class', value)"
                                v-bind:isActive="uniqueValues.class[value]"
                            />
                        </div>
                    </div>
                </div>
                <div class="m-1">
                    <h6 class="px-1">CICLO</h6>
                    <div class="d-flex">
                        <div v-for="(value, index) in uniqueValues.cycle" :key="'type-' + index">
                            <FilterButtonOutline
                                v-bind:FilterButtonOutlineText="value.toUpperCase()"
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
                <div class="d-flex">
                    <div class="w-100 m-auto px-3">
                        <div class="h5 text-center">FB | IG | GOOGLE</div>
                        <table class="table-sem-bs w-75 text-center mx-auto text-center">
                            <thead>
                                <tr class="bg-dark-black text-light-white">
                                    <th>Plataforma</th>
                                    <th v-for="(column, index) in uniqueValues.week_number" :key="'header-' + index">{{ column }}</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(row, rowIndex) in dataContentDistribution" :key="'row-' + rowIndex">
                                    <td class="py-0 px-2"> {{ rowIndex }} </td>
                                    <td v-for="(column, columnIndex) in uniqueValues.week_number" :key="'cell-' + rowIndex + '-' + columnIndex" class="py-0 px-2">{{ row[column] }}</td>
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
        <div class="border rounded bg-light-white m-3 p-3">
            <h2 class="text-center font-weight-bold px-3 pb-3">ACOMPANHAMENTO POR REDE SOCIAL</h2>
            <div class="border bg-white p-3 my-1">
                <div class="h4 title-dist-table text-center rounded">REPRODUÇÃO 75%</div>
                <div class="d-lg-flex d-block">
                    <div class="w-lg-50 w-md-75 w-100 m-auto px-3">
                        <div class="h5 text-center">FB | IG</div>
                        <table class="table table-dist-content text-center mx-auto">
                            <thead>
                                <tr class="bg-dark-black text-light-white">
                                    <th v-for="(column, index) in headerTableFB75" :key="'header-' + index">{{ column }}</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(row, rowIndex) in dataReprodution" :key="'row-' + rowIndex">
                                    <td v-for="(column, columnIndex) in columnsTableFB75" :key="'cell-' + rowIndex + '-' + columnIndex" class="p-0">{{ row[column] }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="w-lg-50 w-md-75 w-100 m-auto px-3">
                        <div class="h5 text-center">GOOGLE</div>
                        <table class="table table-dist-content text-center mx-auto">
                            <thead>
                                <tr class="bg-dark-black text-light-white">
                                    <th v-for="(column, index) in headerTableFB75" :key="'header-' + index">{{ column }}</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(row, rowIndex) in dataReprodution" :key="'row-' + rowIndex">
                                    <td v-for="(column, columnIndex) in columnsTableFB75" :key="'cell-' + rowIndex + '-' + columnIndex" class="p-0">{{ row[column] }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="border bg-white p-3 my-1">
                <div class="h4 title-dist-table text-center rounded">REPRODUÇÃO 50%</div>
                <div class="d-lg-flex d-block">
                    <div class="ww-lg-50 w-md-75 w-100 m-auto px-3">
                        <div class="h5 text-center">FB | IG</div>
                        <table class="table table-dist-content text-center mx-auto">
                            <thead>
                                <tr class="bg-dark-black text-light-white">
                                    <th v-for="(column, index) in headerTableFB50" :key="'header-' + index">{{ column }}</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(row, rowIndex) in dataReprodution" :key="'row-' + rowIndex">
                                    <td v-for="(column, columnIndex) in columnsTableFB50" :key="'cell-' + rowIndex + '-' + columnIndex" class="p-0">{{ row[column] }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="w-lg-50 w-md-75 w-100 m-auto px-3">
                        <div class="h5 text-center">GOOGLE</div>
                        <table class="table table-dist-content text-center mx-auto">
                            <thead>
                                <tr class="bg-dark-black text-light-white">
                                    <th v-for="(column, index) in headerTableFB50" :key="'header-' + index">{{ column }}</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(row, rowIndex) in dataReprodution" :key="'row-' + rowIndex">
                                    <td v-for="(column, columnIndex) in columnsTableFB50" :key="'cell-' + rowIndex + '-' + columnIndex" class="p-0">{{ row[column] }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="border bg-white p-3 my-1">
                <div class="h4 title-dist-table text-center rounded">REPRODUÇÃO 25%</div>
                <div class="d-lg-flex d-block">
                    <div class="w-lg-50 w-md-75 w-100 m-auto px-3">
                        <div class="h5 text-center">FB | IG</div>
                        <table class="table table-dist-content text-center mx-auto">
                            <thead>
                                <tr class="bg-dark-black text-light-white">
                                    <th v-for="(column, index) in headerTableFB25" :key="'header-' + index">{{ column }}</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(row, rowIndex) in dataReprodution" :key="'row-' + rowIndex">
                                    <td v-for="(column, columnIndex) in columnsTableFB25" :key="'cell-' + rowIndex + '-' + columnIndex" class="p-0">{{ row[column] }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="w-lg-50 w-md-75 w-100 m-auto px-3">
                        <div class="h5 text-center">GOOGLE</div>
                        <table class="table table-dist-content text-center mx-auto">
                            <thead>
                                <tr class="bg-dark-black text-light-white">
                                    <th v-for="(column, index) in headerTableFB25" :key="'header-' + index">{{ column }}</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(row, rowIndex) in dataReprodution" :key="'row-' + rowIndex">
                                    <td v-for="(column, columnIndex) in columnsTableFB25" :key="'cell-' + rowIndex + '-' + columnIndex" class="p-0">{{ row[column] }}</td>
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
                    @event="$store.dispatch('exportToExcel', {data: dataReprodution, documentName: 'nome_do_documento'})"
                />  
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import CalendarData from "../CalendarData.vue";
  import FilterButtonOutline from "../FilterButtonOutline.vue";
  import SmallButton from "../../../SmallButton.vue";
  
  export default {
    components: {
        FilterButtonOutline
        , CalendarData
        , SmallButton
    },
    data() {
        // FUNCTION TO CALCULATE 30 DIAS ANTERIORES
        // const today = new Date();
        // const startDate = new Date(today.getTime() - (31 * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10);
        // const endDate = new Date(today.getTime() - (1 * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10);
        return {
            // main values
            startDate: '2022-05-01',
            endDate: '2022-05-30',
            mainData: {},
            activatedFilters: {},

            // data for tables
            headerTableFB75: ['Semana do Ano', 'Alcance', 'Impressões', 'Reprodução 75%', 'Custo', 'CPV 75%'],
            columnsTableFB75: [ 'distinctWeekYear','reach', 'impressions', 'video_p75_watched_actions', 'spend', 'CPV75'],

            headerTableFB50: ['Semana do Ano', 'Alcance', 'Impressões', 'Reprodução 50%', 'Custo', 'CPV 50%'],
            columnsTableFB50: [ 'distinctWeekYear','reach', 'impressions', 'video_p50_watched_actions', 'spend', 'CPV50'],

            headerTableFB25: ['Semana do Ano', 'Alcance', 'Impressões', 'Reprodução 25%', 'Custo', 'CPV 25%'],
            columnsTableFB25: [ 'distinctWeekYear','reach', 'impressions', 'video_p25_watched_actions', 'spend', 'CPV25'],
        }
    },
    // functions to be activated when the page is loaded
    async mounted() {
        await this.$store.dispatch('getDataDatabase')
        this.mainData = this.$store.state.dataFaceAds.data;
        this.createObjectFilters()
    },

    computed:{
        // it returns a array with all headers in main data
        distinctHeaders() {
            if (Object.keys(this.mainData).length === 0) {return [];}
            const headers = Object.keys(this.mainData[0]);
            const uniqueHeaders = new Set(headers);
            return Array.from(uniqueHeaders);
        },
        // it creates a object with unique values of the keys declared
        uniqueValues() {
            if (Object.keys(this.mainData).length === 0) {return {};}

            const uniqueValuesObj = {};
            const keys = ['date_start', 'week_number', 'cycle', 'class', 'type', 'social_network'];
            keys.forEach(key => {uniqueValuesObj[key] = Array.from(new Set(this.mainData.map(item => item[key])));});
            return uniqueValuesObj;
        },
        textFiltersActivated(){
            if (Object.keys(this.activatedFilters).length === 0) {return {};}

            const listFalse = []

            for (const e in Object.values(this.activatedFilters.cycle)) {if (Object.values(this.activatedFilters.cycle)[e] === false) {listFalse.push(Object.keys(this.activatedFilters.cycle)[e])}}
            for (const e in Object.values(this.activatedFilters.class)) {if (Object.values(this.activatedFilters.class)[e] === false) {listFalse.push(Object.keys(this.activatedFilters.class)[e])}}
            for (const e in Object.values(this.activatedFilters.type)) {if (Object.values(this.activatedFilters.type)[e] === false) {listFalse.push(Object.keys(this.activatedFilters.type)[e])}}
            for (const e in Object.values(this.activatedFilters.social_network)) {if (Object.values(this.activatedFilters.social_network)[e] === false) {listFalse.push(Object.keys(this.activatedFilters.social_network)[e])}}

            if (listFalse.length === 0) {return ['SEM FILTRO ATIVADO'];} else { return [`FILTROS [${listFalse}] ATIVADOS!`]}
        },
        // filters the main data
        mainDataFiltered() {
            if (Object.keys(this.mainData).length === 0) {return {};}
            let filteredData = [];
            this.mainData.forEach(element => {
                let shouldAdd = true;
                for (const e in Object.values(this.activatedFilters.cycle)) {if (Object.values(this.activatedFilters.cycle)[e] === false) {if(Object.keys(this.activatedFilters.cycle)[e] == element.cycle){shouldAdd = false;}}}
                for (const e in Object.values(this.activatedFilters.class)) {if (Object.values(this.activatedFilters.class)[e] === false) {if(Object.keys(this.activatedFilters.class)[e] == element.class){shouldAdd = false;}}}
                for (const e in Object.values(this.activatedFilters.type)) {if (Object.values(this.activatedFilters.type)[e] === false) {if(Object.keys(this.activatedFilters.type)[e] == element.type){shouldAdd = false;}}}
                for (const e in Object.values(this.activatedFilters.social_network)) {if (Object.values(this.activatedFilters.social_network)[e] === false) {if(Object.keys(this.activatedFilters.social_network)[e] == element.social_network){shouldAdd = false;}}}
                if (shouldAdd) {filteredData.push(element);}
            });

            return filteredData;
        },
        // treat the mainDataFiltered to be able to input inside tables
        dataReprodution() {
            if (Object.keys(this.mainData).length === 0) {return {};}
            const data = {};

            this.uniqueValues.week_number.forEach(weekNumber => {
                data[weekNumber] = {
                    reach: 0,
                    impressions: 0,
                    video_p75_watched_actions: 0,
                    video_p50_watched_actions: 0,
                    video_p25_watched_actions: 0,
                    spend: 0,
                };
                this.mainDataFiltered.filter(element => element.week_number === weekNumber)
                .forEach(element => {
                        data[weekNumber].reach += Number(element.reach);
                        data[weekNumber].impressions += Number(element.impressions);
                        data[weekNumber].video_p75_watched_actions += Number(element.video_p75_watched_actions);
                        data[weekNumber].video_p50_watched_actions += Number(element.video_p50_watched_actions);
                        data[weekNumber].video_p25_watched_actions += Number(element.video_p25_watched_actions);
                        data[weekNumber].spend += Number(element.spend); 
                });

                data[weekNumber].distinctWeekYear = weekNumber
                data[weekNumber].reach = Math.round(data[weekNumber].reach).toLocaleString();
                data[weekNumber].impressions = Math.round(data[weekNumber].impressions).toLocaleString();
                data[weekNumber].video_p75_watched_actions = Math.round(data[weekNumber].video_p75_watched_actions).toLocaleString();
                data[weekNumber].spend = data[weekNumber].spend.toFixed(2);
                if (data[weekNumber].video_p75_watched_actions > 0) {data[weekNumber]['CPV75'] = (data[weekNumber].spend / data[weekNumber].video_p75_watched_actions).toFixed(2);} else {data[weekNumber]['CPV75'] = 0;}
                if (data[weekNumber].video_p50_watched_actions > 0) {data[weekNumber]['CPV50'] = (data[weekNumber].spend / data[weekNumber].video_p50_watched_actions).toFixed(2);} else {data[weekNumber]['CPV50'] = 0;}
                if (data[weekNumber].video_p25_watched_actions > 0) {data[weekNumber]['CPV25'] = (data[weekNumber].spend / data[weekNumber].video_p25_watched_actions).toFixed(2);} else {data[weekNumber]['CPV25'] = 0;}

            });
            return data;
        },
        dataContentDistribution() {
            if (Object.keys(this.mainData).length === 0) {
                return {};
            }

            const data = {
                'FB & IG': {},
                'GOOGLE': {}
            };

            for (let e in this.uniqueValues.week_number) {
                data['FB & IG'][this.uniqueValues.week_number[e]] = 0;
                data['GOOGLE'][this.uniqueValues.week_number[e]] = 0;

                this.mainDataFiltered.filter(element => element.week_number === Number(this.uniqueValues.week_number[e])).forEach(element => {
                if (element.social_network === 'facebook' || element.social_network === 'instagram') {
                    data['FB & IG'][this.uniqueValues.week_number[e]] += element.spend;
                } else if (element.social_network === 'google') {
                    data['GOOGLE'][this.uniqueValues.week_number[e]] += element.spend;
                }
                });

                data['FB & IG'][this.uniqueValues.week_number[e]] = (data['FB & IG'][this.uniqueValues.week_number[e]]).toFixed(2);
                data['GOOGLE'][this.uniqueValues.week_number[e]] = (data['GOOGLE'][this.uniqueValues.week_number[e]]).toFixed(2);
            }

            console.log(data);

            return data;
            }
    },
    
    methods: {
        // change the filters to false or true and reload the main function
        handleFilter(header, value) {
            this.activatedFilters[header][value] = !this.activatedFilters[header][value];
            this.mainDataFiltered;
        },
        // create filters to be used on tables on load page
        createObjectFilters(){
            if (Object.keys(this.uniqueValues).length === 0) {return {};}

            const filters = {class: {},type: {},cycle: {}, social_network: {}};
            this.uniqueValues.class.forEach(value => {filters.class[value] = true;});
            this.uniqueValues.type.forEach(value => {filters.type[value] = true;});
            this.uniqueValues.cycle.forEach(value => {filters.cycle[value] = true;});
            this.uniqueValues.social_network.forEach(value => {filters.social_network[value] = true;});
            this.activatedFilters = filters
        },
    },
}
</script>

<style scoped>
    @media (max-width: 576px) {
    .table {
        display: block;
        width: 100%;
        overflow-x: auto;
    }
    .table td,
    .table th {
        white-space: nowrap;
    }
}

.table-sem-bs {
  border: 1px solid var(--dark-black);
  border-collapse: collapse;
  width: 100%;
}
.table-sem-bs th, .table-sem-bs td {
  border: 1px solid var(--dark-black);
  padding: 8px;
}
.table-sem-bs th {
  background-color: var(--dark-black);
  color: #fff;
}
.table-sem-bs tr:nth-child(even) {
  background-color: #fff;
}
</style>