<template>
  <v-app>
    <v-app-bar app color="indigo darken-4" dark>
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
  color: #64B5F6!important;
}
</style>