<template>
  <div class="analytics">
    <h1>Аналитика</h1>
    <line-chart class="chart" :width="700"/>
  </div>
</template>

<script>
import LineChart from "../components/LineChart.vue";
export default { 
  components: {
    LineChart
  }
}
</script>

<style>
.chart {
  margin: 0 auto;
  width: min-content;
}
</style>

