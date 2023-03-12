<template>
    <table class="table table-striped table-dist-content text-center m-3">
        <thead>
            <tr>
                <th v-for="(column, index) in headerColumns" :key="'header-' + index">{{ column }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, rowIndex) in rowData" :key="'row-' + rowIndex">
                <td class="p-0">{{ firstColumn[rowIndex] }}</td>
                <td v-for="(column, columnIndex) in otherColumns" :key="'cell-' + rowIndex + '-' + columnIndex" class="p-0">{{ row[column] }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    props: {
        headerColumns: {
            type: Array,
            required: true,
        },
        firstColumn: {
            type: Array,
            required: true,
        },
        otherColumns: {
            type: Array,
            required: true,
        },
        rowData: {
            type: Object,
            required: true,
        },
    },
};
  </script>
  