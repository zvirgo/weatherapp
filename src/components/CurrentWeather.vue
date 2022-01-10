<template>
  <div class="current-weather">
    <div class="text-h3 text-capitalize">
      {{ this.currentWeather.name }}
    </div>
    <v-row align="center">
      <v-col cols="6">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="text-h2">
              {{ temp(this.currentWeather.main.temp) }}&deg;C
            </v-list-item-title>
            <v-list-item-subtitle>
              <span>
                <v-icon class="white--text">mdi-chevron-up</v-icon>
                {{ temp(this.currentWeather.main.temp_max) }}&deg;
              </span>
              <span>
                <v-icon class="white--text">mdi-chevron-down</v-icon>
                {{ temp(this.currentWeather.main.temp_min) }}&deg;
              </span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="text-h6 text-capitalize">
              {{ this.currentWeather.weather[0].description }}
            </v-list-item-title>
            <v-list-item-subtitle class="white--text"
              >Feel Like:
              {{
                temp(this.currentWeather.main.feels_like)
              }}&deg;</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="6">
        <v-img
          :src="
            require(`../../public/conditions/${this.currentWeather.weather[0].icon}.svg`)
          "
          alt=""
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CurrentWeather",
  props: ["currentWeather"],
  created() {
    console.log(this.currentWeather);
  },
  methods: {
    temp(val) {
      const fahrenheit = val;
      const celsius = Math.round((fahrenheit - 32) * (5 / 9));
      return celsius;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  color: white;
}
.current-weather {
  padding: 16px;
}
</style>