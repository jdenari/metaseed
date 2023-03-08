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
  export default {
    // computed: {
    //   computedData() {
    //     // return your original data here
    //     return this.$store.state.dataFaceAds.data;
    //   },
    //   summedData() {
    //     // group the data by weekYear and compute the sums
    //     const groups = {};
    //     this.computedData.forEach((item) => {
    //       const weekYear = item.date_start.substring(0, 7);
    //       if (!(weekYear in groups)) {
    //         groups[weekYear] = {
    //           weekYear: weekYear,
    //           summedReach: 0,
    //           summedImpressions: 0,
    //           summedSpend: 0,
    //         };
    //       }
    //       groups[weekYear].summedReach += parseInt(item.reach);
    //       groups[weekYear].summedImpressions += parseInt(item.impressions);
    //       groups[weekYear].summedSpend += parseFloat(item.spend);
    //     });
    //     // convert the object of groups to an array of objects
    //     return Object.values(groups);
    //   },
    // },
  };
  </script>
  <style>
    .table-dist-content {
      width: 400px;
      font-size: 12px;
    }
  </style>