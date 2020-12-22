
import Vue from "vue";
import axios from 'axios';
import store from "./store";
import App from "./App.vue";
import router from "./router/index.js";
import vuetify from "./plugins/vuetify.js";

Vue.config.productionTip = false;
const base = axios.create({
  baseURL: "https://desolate-anchorage-18616.herokuapp.com/api"
})
Vue.prototype.$http = base;
axios.defaults.baseURL = 'https://desolate-anchorage-18616.herokuapp.com/api/';

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");