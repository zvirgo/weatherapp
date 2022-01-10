<template>
  <div class="main">
    <v-progress-circular
      class="loading"
      v-if="loading"
      indeterminate
      color="green"
      :size="100"
      :width="7"
    >
      Waiting ...
    </v-progress-circular>
    <div v-else class="weather-wrap night " :class="{  }">
      <current-weather  :currentWeather="currentWeather" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import db from "../firebase/firebaseinit";
import CurrentWeather from "../components/CurrentWeather.vue";
export default {
  components: { CurrentWeather },
  name: "weather",
  component: {},
  data() {
    return {
      APIkey: "c55dc8f793ea78f694e30d9af7413816",
      forecast: null,
      currentWeather: null,
      loading: true,
      currentTime: null,
      isDay: null,
      isNight: null,
      timePosition: null,
    };
  },
  created() {
    this.getWeather();
  },
  beforeDestroy() {
    this.$emit("resetDays");
  },
  methods: {
    getWeather() {
      db.collection("cities")
        .where("city", "==", `${this.$route.params.city}`)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            this.currentWeather = doc.data().currentWeather;
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${
                  doc.data().currentWeather.coord.lat
                }&lon=${
                  doc.data().currentWeather.coord.lon
                }&exclude=current,minutley,alerts&units=imperial&appid=${
                  this.APIkey
                }`
              )
              .then((res) => {
                this.forecast = res.data;
              })
              .then(() => {
                this.loading = false;
                this.getCurrentTime();
              });
          });
        });
    },
    getCurrentTime() {
      const dataObject = new Date();
      this.currentTime = dataObject.getHours();
      const sunrise = new Date(
        this.currentWeather.sys.sunrise * 1000
      ).getHours();
      const sunset = new Date(this.currentWeather.sys.sunset * 1000).getHours();
      if (this.currentTime > sunrise && this.currentTime < sunset) {
        this.$emit("is-day");
        this.timePosition = "is-day";
      } else {
        this.$emit("is-night");
        this.timePosition = "is-night";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  left: 50%;
  top: 50%;
}
.day {
  transition: 500ms ease all;
  background-color: rgb(59, 150, 249);
}
.night {
  transition: 500ms ease all;
  background-color: rgb(20, 42, 95);
}
</style>