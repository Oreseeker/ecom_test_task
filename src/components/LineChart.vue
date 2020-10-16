<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: [
          "2020-07-01",
          "2020-07-02",
          "2020-07-03",
          "2020-07-04",
          "2020-07-05",
          "2020-07-06",
          "2020-07-07",
          "2020-07-08",
          "2020-07-09",
          "2020-07-10",
          "2020-07-11",
          "2020-07-12",
          "2020-07-13",
          "2020-07-14",
          "2020-07-15",
          "2020-07-16",
          "2020-07-17",
          "2020-07-18",
          "2020-07-19",
          "2020-07-20",
          "2020-07-21",
          "2020-07-22",
          "2020-07-23",
          "2020-07-24",
          "2020-07-25",
          "2020-07-26",
          "2020-07-27",
          "2020-07-28",
          "2020-07-29"
        ].map(el => el.split("-")[2] + " июль"),
        datasets: [
          {
            label: "Число посещений",
            backgroundColor: "#e6c8fa",
            pointBackgroundColor: "#9500fc",
            borderWidth: 4,
            borderColor: "#bd63fb",
            pointBorderColor: "#9500fc",
            showLine: true,
            lineTension: 0,
            // visits
            data: [
              213,
              249,
              179,
              170,
              184,
              202,
              198,
              168,
              176,
              171,
              190,
              154,
              246,
              250,
              227,
              140,
              170,
              125,
              106,
              207,
              222,
              198,
              204,
              213,
              145,
              166,
              163,
              135,
              45
            ]
          }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 4,
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                color: "rgba(0, 0, 0, 0)"
              }
            }
          ]
        },
        tooltips: {
          displayColors: false
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  }
};
</script>