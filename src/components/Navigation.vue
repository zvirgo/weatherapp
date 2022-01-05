<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn text> <span> Add City</span> </v-btn>
      </div>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-square-edit-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style>
</style>