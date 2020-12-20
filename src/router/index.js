import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      public: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/auth/TheLogin.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/',
    name: 'Administration',
    component: () => import('../views/Administration.vue'),
    meta: {
      public: true
      //auth: false
    }
  },
  {
    path: '/categoria',
    name: 'categoria',
    component: () => import('../components/CRUDCategoria.vue'),
    meta: {
      
      public: true
      //auth: false
    }
  },
  {
    path: '/articulo',
    name: 'articulo',
    /** Modificar el CRUD al de articulos */
    component: () => import('../components/CRUDArticulo.vue'),
    meta: {
      
      public: true
      //auth: false
    }
  },
  {
    path: '/venta',
    name: 'venta',
    /** Modificar el CRUD al de ventas */
    component: () => import('../components/CRUDVenta.vue'),
    meta: {
      
      public: true
      //auth: false
    }
  },
  {
    path: '/cliente',
    name: 'cliente',
    /** Modificar el CRUD al de ventas */
    component: () => import('../components/CRUDCliente.vue'),
    meta: {
      
      public: true
      //auth: false
    }
  },
  {
    path: '/user',
    name: 'user',
    /** Modificar el CRUD al de ventas */
    component: () => import('../components/CRUDUser.vue'),
    meta: {
      
      public: true
      //auth: false
    }
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.public)) {
    next();
  } else if (store.state.usuario) {
    if (to.matched.some(record => record.meta.auth)) {
      console.log(store.state.usuario);
      next();
    }
  } else {
    next({ name: 'login' });
  }
})

export default router;
