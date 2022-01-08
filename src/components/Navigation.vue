<template>
  <v-app>
    <v-app-bar app color="indigo darken-4" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-btn text> <span> Add City</span> </v-btn>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-square-edit-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-btn icon @click="openModal">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <modal
      :showModal="showModal"
      @disagree="showModal = false"
      @agree="showModal = false"
    />
  </v-app>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: { Modal },
  name: "Navigation",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
  },
};
</script>

<style>
</style>