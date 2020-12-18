import Vue from "vue";
import VueRouter from "vue-router";
//import Articulos from "../components/Articulos.vue";
Vue.use(VueRouter);

const routes = [
  /**
  {
    path: "/",
    name: 'Articulos',
    component: Articulos,
  },
   */
  {
    path: "/categoria",
    name: 'categoria',
    component: () => import("../components/CRUDCategoria.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
