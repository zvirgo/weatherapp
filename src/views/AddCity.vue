<template>
  <div class="grid">
    <v-container>
      <v-row class="d-flex align-center">
        <v-col cols="12" sm="4" v-for="(city, index) in cities" :key="index">
          <div class="city-link">
            <city :city="city" :edit="edit" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import City from "../components/City.vue";
import axios from "axios";
import db from "../firebase/firebaseinit";
export default {
  name: "AddCity",
  components: {
    City,
  },
  props: ["edit"],
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
          if (doc.type === "added" && !doc.doc.Nd) {
            try {
              const reponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${
                  doc.doc.data().city
                }&units=imperial&APPID=${this.APIkey}`
              );
              const data = reponse.data;
              firebaseDB
                .doc(doc.doc.id)
                .update({
                  currentWeather: data,
                })
                .then(() => {
                  this.cities.push(doc.doc.data());
                })
                .then(() => {});
            } catch (err) {
              console.log(err);
            }
          } else if (doc.type === "added" && doc.doc.Nd) {
            this.cities.push(doc.doc.data());
          } else if (doc.type === "removed") {
            this.cities = this.cities.filter(
              (city) => city.city != doc.doc.data().city
            );
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

<style lang="scss" scoped>
</style>
