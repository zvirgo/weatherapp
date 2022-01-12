<template>
  <v-row justify="center">
    <v-dialog v-model="showModal" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Enter Location</span>
        </v-card-title>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Search by city name"
                    v-model="city"
                    :rules="cityRules"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="disagree"> Close </v-btn>
            <v-btn color="blue darken-1" text @click="agree" :disabled="!valid">
              Save
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import db from "../firebase/firebaseinit";
export default {
  name: "modal",
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      valid: true,
      city: "",
      cityRules: [(v) => !!v || "City is required"],
    };
  },
  computed: {
    ...mapState(["APIkey"]),
  },
  methods: {
    disagree() {
      this.$emit("disagree");
    },
    async agree() {
      if (this.city) {
        try {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&APPID=${this.APIkey}`
          );
          const data = await res.data;
          db.collection("cities")
            .doc()
            .set({
              city: this.city,
              currentWeather: data,
            })
            .then(() => {
              this.$emit("agree");
            });
        } catch (error) {
          this.$vToastify.warning(
            `${this.city} does not exist,
             Please try again!`
          );
        }
      }
    },
  },
};
</script>

<style>
</style>