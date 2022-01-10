<template>
  <div class="main">
    <navigation
      :addCityActive="addCityActive"
      :is-day="dayTime"
      :is-night="nightTime"
      :resetDays="resetDays"
    />
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
export default {
  name: "App",
  data() {
    return {
      addCityActive: null,
      isDay: null,
      isNight: null,
    };
  },
  components: {
    Navigation,
  },
  created() {
    this.checkRoute();
  },
  methods: {
    checkRoute() {
      if (this.$route.name === "AddCity") {
        this.addCityActive = true;
      } else {
        this.addCityActive = false;
      }
    },
    dayTime() {
      this.isDay = !this.isDay;
    },
    nightTime() {
      this.isNight = !this.isNight;
    },
    resetDays() {
      (this.isDay = false), (this.isNight = false);
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}
a {
  text-decoration: none !important;
}
</style>
