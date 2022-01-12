import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueToastify from "vue-toastify";

Vue.use(VueToastify);

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    temp(val) {
      const fahrenheit = val;
      const celsius = Math.round((fahrenheit - 32) * (5 / 9));
      return celsius;
    },
  },
});

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
