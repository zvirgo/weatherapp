<template>
  <div class="daily-forecast">
    <v-container>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="(day, index) in filteredList" :key="index">
              <td class="white--text">
                {{
                  new Date(day.dt * 1000).toLocaleString("en-us", {
                    weekday: "long",
                  })
                }}
              </td>
              <td>
                <v-img
                  contain
                  :src="
                    require(`../../public/conditions/${day.weather[0].icon}.svg`)
                  "
                  alt=""
                  max-height="25"
                  max-width="25"
                ></v-img>
              </td>
              <td class="white--text">
                {{ temp(day.temp.max) }}&deg; / {{ temp(day.temp.min) }}&deg;
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "DailyForecast",
  props: ["filteredList"],
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
    };
  },
  created() {},
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