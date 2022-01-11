<template>
  <div class="weekly-forecast">
    <div>
      <daily-forecast :filteredList="filteredList" />
    </div>
  </div>
</template>

<script>
import DailyForecast from "./DailyForecast.vue";
export default {
  components: { DailyForecast },
  name: "WeeklyForecast",
  props: ["forecast"],
  created() {
  },

  computed: {
    filteredList() {
      return this.forecast.daily.slice(1, 7);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>