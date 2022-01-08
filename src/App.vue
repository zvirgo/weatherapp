<template>
  <div class="main">
    <navigation />
  </div>
</template>
<script>

import Navigation from "./components/Navigation.vue";
export default {
  name: "App",
  components: {
    Navigation,
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
