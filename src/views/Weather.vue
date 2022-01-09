<template>
  <h4>weather</h4>
</template>

<script>
import axios from "axios";
import db from "../firebase/firebaseinit";
export default {
  name: "weather",

  data() {
    return {
      APIkey: "c55dc8f793ea78f694e30d9af7413816",
      forecast: null,
      currentWeather: null,
      loading: true,
    };
  },
  created() {
    this.getWeather();
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
              });
          });
        });
    },
  },
};
</script>

<style>
</style>