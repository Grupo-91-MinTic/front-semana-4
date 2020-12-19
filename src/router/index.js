import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../components/auth/TheLogin.vue'),
  },
  {
    path: '/categoria',
    name: 'Categoria',
    component: () => import('../components/CRUDCategoria.vue')
  },
  {
    path: '/articulo',
    name: 'Articulo',
    /** Modificar el CRUD al de articulos */
    component: () => import('../components/CRUDArticulo.vue')
  },
  {
    path: '/venta',
    name: 'venta',
    /** Modificar el CRUD al de ventas */
    component: () => import('../components/CRUDVenta.vue')
  },
  {
    path: '/cliente',
    name: 'cliente',
    /** Modificar el CRUD al de ventas */
    component: () => import('../components/CRUDCliente.vue')
  },
  {
    path: '/user',
    name: 'user',
    /** Modificar el CRUD al de ventas */
    component: () => import('../components/CRUDUser.vue')
  },
];

const router = new VueRouter({
  routes
});

export default router;
