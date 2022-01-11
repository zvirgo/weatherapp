<template>
  <div class="hourly-weather">
    <div v-for="(time, index) in filteredList" :key="index">
      <hourly-temp :time="time" />
    </div>
  </div>
</template>

<script>
import HourlyTemp from "./HourlyTemp.vue";
export default {
  components: { HourlyTemp },
  name: "HourlyWeather",
  props: ["forecast"],
  created() {
  },
  computed: {
    filteredList() {
      return this.forecast.hourly.slice(0, 23);
    },
  },
};
</script>

<style lang="scss" scoped>
.hourly-weather {
  display: flex;
  max-width: 100vw;
  overflow: scroll;
  margin: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>