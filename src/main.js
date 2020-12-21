
import Vue from "vue";
import axios from 'axios';
import store from "./store";
import App from "./App.vue";
import router from "./router/index.js";
import vuetify from "./plugins/vuetify.js";

Vue.config.productionTip = false;
const base = axios.create({
  baseURL : "http://localhost:3000/api"
})
Vue.prototype.$http = base;
axios.defaults.baseURL = 'http://localhost:3000/api/';

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");