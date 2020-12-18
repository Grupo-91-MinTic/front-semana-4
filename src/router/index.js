import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: 'home',
    component: Home,
  },
  {
    path: "/categoria",
    name: 'categoria',
    component: () => import("../components/CRUDCategoria.vue")
  },
  {
    path: "/articulo",
    name: 'articulo',
    /** Modificar el CRUD al de articulos */
    component: () => import("../components/CRUDArticulo.vue")
  },
  {
    path: "/venta",
    name: 'venta',
    /** Modificar el CRUD al de ventas */
    component: () => import("../components/CRUDVenta.vue")
  },
  {
    path: "/cliente",
    name: 'cliente',
    /** Modificar el CRUD al de ventas */
    component: () => import("../components/CRUDCliente.vue")
  },
  {
    path: "/user",
    name: 'user',
    /** Modificar el CRUD al de ventas */
    component: () => import("../components/CRUDUser.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
