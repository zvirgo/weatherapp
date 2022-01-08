<template>
  <v-row justify="center">
    <v-dialog v-model="showModal" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Enter Location</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Search by city name"
                  name="city-name"
                  v-model="city"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="disagree"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="agree"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
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
      city: "",
    };
  },
  methods: {
    disagree() {
      this.$emit("disagree");
    },
    agree() {
      this.$emit("agree");
    },
  },
};
</script>

<style>
</style>