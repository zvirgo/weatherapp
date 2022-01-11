<template>
  <v-container>
    <v-simple-table>
      <template>
        <tbody>
          <tr>
            <td>
              <div class="d-flex white--text">
                <v-img
                  contain
                  src="../../public/conditions/sunrise.png"
                  alt=""
                  max-height="25"
                  max-width="25"
                ></v-img>
                <span class="pl-2">Sunrise</span>
              </div>
            </td>
            <td class="white--text">
              {{
                new Date(this.currentWeather.sys.sunrise * 1000).toLocaleString(
                  "en-us",
                  { timeStyle: "short" }
                )
              }}
            </td>
            <td>
              <div class="d-flex white--text">
                <v-img
                  contain
                  src="../../public/conditions/sunset.png"
                  alt=""
                  max-height="25"
                  max-width="25"
                ></v-img>
                <span class="pl-2">Sunset</span>
              </div>
            </td>
            <td class="white--text">
              {{
                new Date(this.currentWeather.sys.sunset * 1000).toLocaleString(
                  "en-us",
                  { timeStyle: "short" }
                )
              }}
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex white--text">
                <v-img
                  contain
                  src="../../public/conditions/humidity.png"
                  alt=""
                  max-height="25"
                  max-width="25"
                ></v-img>
                <span class="pl-2">Humidity</span>
              </div>
            </td>
            <td class="white--text">
              {{ this.currentWeather.main.humidity }}%
            </td>
            <td>
              <div class="d-flex white--text">
                <v-img
                  contain
                  src="../../public/conditions/cloud.png"
                  alt=""
                  max-height="25"
                  max-width="25"
                ></v-img>
                <span class="pl-2">Cloudness</span>
              </div>
            </td>
            <td class="white--text">
              {{ this.currentWeather.clouds.all }}%
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex white--text">
                <v-img
                  contain
                  src="../../public/conditions/wind.png"
                  alt=""
                  max-height="25"
                  max-width="25"
                ></v-img>
                <span class="pl-2">Wind</span>
              </div>
            </td>
            <td class="white--text">
              {{ this.currentWeather.wind.speed }} mph
            </td>
            <td>
              <div class="d-flex white--text">
                <v-img
                  contain
                  src="../../public/conditions/pressure.png"
                  alt=""
                  max-height="25"
                  max-width="25"
                ></v-img>
                <span class="pl-2">Pressure</span>
              </div>
            </td>
            <td class="white--text">
              {{ this.currentWeather.main.pressure }} hPa
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "AdditionalInfo",
  props: ["currentWeather"],
  created() {
    console.log(this.currentWeather);
  },
};
</script>

<style lang="scss" scoped>
 tbody {
     tr:hover {
        background-color: transparent !important;
     }
  }
.theme--light.v-data-table {
  background-color: transparent;
}
</style>