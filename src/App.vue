<template>
  <v-app>
    <navigation />
  </v-app>
</template>

<script>
import axios from "axios";
import db from "./firebase/firebaseinit";
import Navigation from "./components/Navigation.vue";
export default {
  name: "App",
  components: {
    Navigation,
  },
  data() {
    return {
      APIkey: "c55dc8f793ea78f694e30d9af7413816",
      cities: [],
    };
  },

  methods: {
    getCityWeather() {
      let firebaseDB = db.collection("cities");
      firebaseDB.onSnapshot((snap) => {
        snap.docChanges().forEach(async (doc) => {
          if (doc.type === "added") {
            try {
              const reponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${
                  doc.doc.data().city
                }&units=imperial&APPID=${this.APIkey}`
              );
              const data = reponse.data;
              console.log(doc.doc.data());
              firebaseDB
                .doc(doc.doc.id)
                .update({
                  currentWeather: data,
                })
                .then(() => {
                  this.cities.push(doc.doc.data());
                })
                .then(() => {
                  console.log(this.cities);
                });
            } catch (err) {
              console.log(err);
            }
          }
        });
      });
    },
  },
  created() {
    this.getCityWeather();
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
