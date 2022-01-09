<template>
  <div class="main">
    <navigation :addCityActive="addCityActive" />
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
export default {
  name: "App",
  data() {
    return {
      addCityActive: null,
    };
  },
  components: {
    Navigation,
  },
  methods: {
    checkRoute() {
      if (this.$route.name === "AddCity") {
        this.addCityActive = true;
      } else {
        this.addCityActive = false;
      }
      console.log(this.addCityActive);
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
  font-family: "Playfair Display", serif;
}
</style>
