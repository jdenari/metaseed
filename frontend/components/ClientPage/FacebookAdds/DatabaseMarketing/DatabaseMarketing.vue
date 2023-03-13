<template>
    <div>
        <div class="d-flex">
            <div class="m-1">
                <h6 class="px-1">TIPO</h6>
                <div class="d-flex">
                    <div v-for="(value, index) in distinctType" :key="'type-' + index">
                        <FilterButtonOutline
                        v-bind:FilterButtonOutlineText="value"
                        v-on:event="handleFilter(value)"
                        v-bind:isActive="filtersType[value]"
                        />
                    </div>
                </div>
            </div>
            <div class="m-1">
                <h6 class="px-1">CLASSE</h6>
                <div class="d-flex">
                    <div v-for="(value, index) in distinctClass" :key="'class-' + index">
                        <FilterButtonOutline
                        v-bind:FilterButtonOutlineText="value"
                        v-on:event="handleFilter(value)"
                        v-bind:isActive="filtersClass[value]"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="m-3">
      <h6 class="px-1">CABEÇALHOS</h6>
        <div class="d-flex m-1">
            <div class="checkbox-filter m-auto text-center">
            <input type="checkbox" v-model="selectAllHeaders" @change="selectAllHeadersCheckbox" class="m-4">
            Selecionar tudo
            </div>
            <div v-for="(header, index) in distinctHeaders" :key="'header-' + index" class="checkbox-filter m-auto text-center">
                <input type="checkbox" v-model="headersFilter[header]" @change="fillCheckboxList(header)" class="m-4" checked> {{ header }}
            </div>
        </div>
        </div>
        <div class="table-responsive m-auto">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th v-for="(value, key) in result[0]" :key="key">{{ key }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in result" :key="index">
                        <td v-for="(value, key) in item" :key="key">{{ value }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </template>
  
  <script>
  import FilterButtonOutline from '../FilterButtonOutline.vue';
  export default {
      components: {
        FilterButtonOutline,
      },
      data() {
          return {
                data: {},
                result: {},
                distinctHeaders: [],
    
                // values for create the filters
                distinctType: [],
                filtersType: {},
                distinctClass: [],
                filtersClass: {},
                headersFilter: [],
                selectAllHeaders: false,
                listTotal: [],
            };
        },
        async mounted() {
            await this.$store.dispatch("getDataDatabase");
            this.data = this.$store.state.dataFaceAds.data;
            await this.distinctValuesForFilters();
            this.createDataforTable()
        },
        methods:{
            // create lists with the distinct values for the filters
            distinctValuesForFilters() {
                // create headers list
                this.distinctHeaders = Object.keys(this.data[0]);
                this.listTotal = Object.keys(this.data[0])
    
                // create list for the type values
                for (const key in this.data) {
                    const value = this.data[key].type;
                    if (!this.distinctType.includes(value)) {
                        this.distinctType.push(value);
                        this.filtersType[value] = true;
                    }
                }
    
                // create list for the class values
                for (const key in this.data) {
                    const value = this.data[key].class;
                    if (!this.distinctClass.includes(value)) {
                        this.distinctClass.push(value);
                        this.filtersClass[value] = true;
                    }
                }
            },
            // change the filters to false or true and reload the main function
            handleFilter(value) {
                // update filter value for clicked type or class
                if (this.filtersType[value] !== undefined) { this.filtersType[value] = !this.filtersType[value];
                } else if (this.filtersClass[value] !== undefined) {this.filtersClass[value] = !this.filtersClass[value];}
    
                // filter data based on active filters
                let filteredData = this.$store.state.dataFaceAds.data.filter(item => {
                    // filter by type
                    let typeFilter = true;
                    if (this.filtersType[item.type] !== undefined) {
                        typeFilter = this.filtersType[item.type];
                    }
    
                    // filter by class
                    let classFilter = true;
                    if (this.filtersClass[item.class] !== undefined) {
                        classFilter = this.filtersClass[item.class];
                    }
    
                    return typeFilter && classFilter;
                });
    
                // update data
                this.data = filteredData;
                
            },
            fillCheckboxList(header) {
                if (this.listTotal.includes(header)) {
                    const index = this.listTotal.indexOf(header);
                    this.listTotal.splice(index, 1);
                    console.log('cortou')
                } else {
                    console.log('adicionou')
                    this.listTotal.push(header);
                }
                this.createDataforTable()
            },
            createDataforTable() {

                this.result = {}

                for (const e in this.data) {
                    for (const i in this.listTotal) {
                        if (!this.result[e]) {this.result[e] = {};}
                        this.result[e][this.listTotal[i]] = this.data[e][this.listTotal[i]];
                    }
                }
            },
            selectAllHeadersCheckbox() {

                for (const header of this.distinctHeaders) {
                    this.headersFilter[header] = this.selectAllHeaders;
                }
            },
      }
  };
  </script>

<style scoped>
table {
    font-size: 11px;
}
.table-responsive {
    width: 1400px;
    overflow-x: auto;
}
.checkbox-filter{
    font-size: 10px;
}
</style>
  