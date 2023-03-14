<template>
    <div>
        <table class="table table-striped table-dist-content text-center">
        <thead>
            <tr>
                <th>Week Year</th>
                <th>Reach</th>
                <th>Impressions</th>
                <th>Spend</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in summedData" :key="index">
                <td class="p-0">{{ item.weekYear }}</td>
                <td class="p-0">{{ item.summedReach.toFixed(0) }}</td>
                <td class="p-0">{{ item.summedImpressions.toFixed(0) }}</td>
                <td class="p-0">{{ item.summedSpend.toFixed(2) }}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
import data from "../../../store";

export default {
  data() {
    return {
      dataFaceAds: data.data,
      summedData: [],
    };
  },
  computed: {
    distinctWeekYears() {
      if (!this.dataFaceAds) {
        return [];
      }
      return [...new Set(this.dataFaceAds.map((item) => item.week_number))];
    },
  },
  methods: {
    updateSummedData() {
      this.summedData = this.distinctWeekYears.map((weekYear) => {
        const filteredData = this.dataFaceAds.filter((item) => item.week_number === weekYear);
        const summedReach = filteredData.reduce((acc, curr) => acc + curr.reach, 0);
        const summedImpressions = filteredData.reduce((acc, curr) => acc + curr.impressions, 0);
        const summedSpend = filteredData.reduce((acc, curr) => acc + curr.spend, 0);
        return {
          weekYear: weekYear,
          summedReach: summedReach,
          summedImpressions: summedImpressions,
          summedSpend: summedSpend,
        };
      });
    },
  },
  watch: {
    dataFaceAds: {
      handler() {
        this.updateSummedData();
      },
      immediate: true,
    },
  },
};


</script>

<style>

</style>
