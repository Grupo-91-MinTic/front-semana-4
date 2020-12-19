
import Vue from "vue";
import axios from 'axios';
import store from "./store";
import App from "./App.vue";
import router from "./router/index.js";
import vuetify from "./plugins/vuetify.js";

Vue.config.productionTip = false;
axios.defaults.baseURL = "http://localhost:3000/api";

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");