<template>
  <div class="hourly-temp">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h6 white--text">
          {{
            new Date(this.time.dt * 1000).toLocaleString("en-us", {
              hour: "numeric",
            })
          }}
        </v-list-item-title>
        <v-list-item-subtitle>
          <span>
            <v-img
              contain
              :src="
                require(`../../public/conditions/${this.time.weather[0].icon}.svg`)
              "
              alt=""
              max-height="25"
              max-width="25"
            ></v-img>
          </span>
        </v-list-item-subtitle>
        <v-list-item-title class="text-h6 white--text">
         {{ temp(this.time.temp) }}&deg;
         </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <span> </span>
  </div>
</template>

<script>
export default {
  name: "HourlyTemp",
  props: ["time"],
};
</script>

<style lang="scss" scoped>
</style>