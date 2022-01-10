<template>
  <v-app>
    <v-app-bar v-if="addCityActive" app color="indigo darken-4" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-btn text> <span> Add City</span> </v-btn>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <v-btn @click="editCities" ref="editCity" icon>
        <v-icon>mdi-square-edit-outline</v-icon>
      </v-btn>
      <v-btn icon @click="reloadApp">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-btn icon @click="openModal">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>
    <v-app-bar v-else app dark :class="{ day: isDay, night: isNight }">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-btn text><v-icon>mdi-keyboard-return </v-icon> </v-btn>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <div>
        {{ new Date().toLocaleString("en-us", { weekday: "short" }) }},
        {{ new Date().toLocaleString("en-us", { month: "short" }) }}
        {{ new Date().toLocaleString("en-us", { day: "2-digit" }) }}
      </div>
    </v-app-bar>
    <v-main>
      <router-view :edit="edit" />
    </v-main>
    <modal
      :showModal="showModal"
      @disagree="showModal = false"
      @agree="addCity"
    />
  </v-app>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: { Modal },
  name: "Navigation",
  props: ["addCityActive", "isNight", "isDay"],
  data() {
    return {
      showModal: false,
      edit: "",
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    addCity() {
      this.showModal = false;
    },
    reloadApp() {
      location.reload();
    },
    editCities() {
      this.$refs.editCity.$el.classList.toggle("edit-active");
      this.edit = !this.edit;
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-active {
  color: #64b5f6 !important;
}
.day {
  transition: 500ms ease all;
  background-color: #fdfbd3;
}
.night {
  transition: 500ms ease all;
  background-color: rgb(20, 42, 95);
}
</style>