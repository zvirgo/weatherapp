<template>
  <div @click="weatherDetails" class="city">
    <v-btn v-if="edit" @click="removecity" icon class="edit" ref="edit">
      <v-icon>mdi-trash-can-outline</v-icon>
    </v-btn>
    <div class="video">
      <video
        autoplay
        loop
        muted
        :src="
          require(`../../public/videos/${this.city.currentWeather.weather[0].icon}.mp4`)
        "
        height="250"
      ></video>
    </div>

    <div class="weather">
      <span>{{ this.city.city }}</span>
      <v-spacer></v-spacer>

      <v-row justify="end">
        <span> {{ temp(this.city.currentWeather.main.temp) }} &deg;C </span>
        <v-img
          contain
          :src="
            require(`../../public/conditions/${this.city.currentWeather.weather[0].icon}.svg`)
          "
          alt=""
          max-height="25"
          max-width="25"
        ></v-img>
      </v-row>
    </div>
  </div>
</template>
<script>
import db from "../firebase/firebaseinit";

export default {
  name: "city",
  props: ["city", "edit"],
  data() {
    return {
      id: null,
    };
  },
  created() {},

  methods: {
    removecity() {
      db.collection("cities")
        .where("city", "==", `${this.city.city}`)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            this.id = doc.id;
          });
        })
        .then(() => {
          db.collection("cities").doc(this.id).delete();
        });
    },
    weatherDetails(e) {
      if (e.target === this.$refs.edit) {
        console.log(this.$refs.edit);
      } else {
        this.$router.push({
          name: "Weather",
          params: { city: this.city.city },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.city {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 20px;
  flex-basis: 50%;
  min-height: 210px;
  color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  .edit {
    color: #fff;
    z-index: 1;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
  .weather {
    display: flex;
    z-index: 1;
    justify-content: flex-end;
    align-items: flex-start;
    flex: 1;

    span {
      font-size: 35px;
      margin-right: 8px;
    }
  }

  .video {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    video {
      height: 100%;
      @media (min-width: 900px) {
        height: auto;
        width: 100%;
      }
    }
  }
}
</style>

