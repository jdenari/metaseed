<template>
    <table class="table table-striped table-dist-content text-center m-3">
        <thead>
            <tr>
                <th>Week Year</th>
                <th>Reach</th>
                <th>Impressions</th>
                <th>Spend</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in data" :key="'column-' + index">
                <td class="p-0">{{ distinctWeekYear[index] }}</td>
                <td class="p-0">{{ item.reach.toFixed(0) }}</td>
                <td class="p-0">{{ item.impressions.toFixed(0) }}</td>
                <td class="p-0">{{ item.spend.toFixed(2) }}</td>
            </tr>
        </tbody>
    </table>
</template>
  
<script>
export default {
    props: {
        data: {type: Object ,},
        distinctWeekYear: {type: Array,},
    },
};
</script>
  