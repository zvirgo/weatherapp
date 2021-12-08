<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">AddCity</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
// import db from "./firebase/firebaseinit";
export default {
  name: "App",
  data() {
    return {
      APIkey: "c55dc8f793ea78f694e30d9af7413816",
      city: "Detroit",
      cities: {},
    };
  },

  methods: {
    // getCityWeather() {
    //   let firebaseDB = db.collection("cities");
    //   firebaseDB.onSnapshot((snap) => {
    //     snap.docChanges().forEach(async (doc) => {
    //       console.log(doc);
    //     });
    //   });
    // },
    getCurrentWeather() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&APPID=${this.APIkey}`
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
  created() {
    this.getCurrentWeather();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Playfair Display", serif;
}
</style>
