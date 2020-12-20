import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      public: true
    },
    children: [
      {
        path: '/principal',
        name: 'LayoutMain',
        component: () => import('../components/LayoutMain.vue'),
        meta: {
          public: true
        }
      },
      {
        path: '/productos',
        name: 'LayoutProduct',
        component: () => import('../components/LayoutProduct.vue'),
        meta: {
          public: true
        }
      },
      {
        path: '/testimonios',
        name: 'LayoutTestimony',
        component: () => import('../components/LayoutTestimony.vue'),
        meta: {
          public: true
        }
      },
      {
        path: '/creadores',
        name: 'LayoutCreator',
        component: () => import('../components/LayoutCreator.vue'),
        meta: {
          public: true
        }
      },
      {
        path: '/informacion',
        name: 'LayoutInfo',
        component: () => import('../components/LayoutInfo.vue'),
        meta: {
          public: true
        }
      },
    ]
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
    path: '/administration',
    name: 'Administration',
    component: () => import('../views/Administration.vue'),
    meta: {
      auth: true
    },
    children: [
      {
        path: '/home',
        name: 'AdministrationMainContent',
        component: () => import('../components/AdministrationMainContent.vue'),
      },
      {
        path: '/categoria',
        name: 'Category',
        component: () => import('../components/CRUDCategory.vue'),
      },
      {
        path: '/articulo',
        name: 'Product',
        /** Modificar el CRUD al de articulos */
        component: () => import('../components/CRUDProduct.vue'),
      },
      {
        path: '/venta',
        name: 'Sell',
        /** Modificar el CRUD al de ventas */
        component: () => import('../components/CRUDSell.vue'),
      },
      {
        path: '/cliente',
        name: 'Client',
        /** Modificar el CRUD al de ventas */
        component: () => import('../components/CRUDClient.vue'),
      },
      {
        path: '/user',
        name: 'User',
        /** Modificar el CRUD al de ventas */
        component: () => import('../components/CRUDUser.vue'),
      },
    ]
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.public)) {
    next();
  } else if (store.state.user) {
    if (to.matched.some(record => record.meta.auth)) {
      console.log(store.state.user);
      next();
    }
  } else {
    next({ name: 'Administration' });
  }
})

export default router;
