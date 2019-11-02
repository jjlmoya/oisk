import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(Router);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/origen',
      name: 'origen',
      component: () => import('./pages/Origin.vue')
    },
    {
      path: '/destino',
      name: 'destination',
      component: () => import('./pages/Destination.vue')
    },
    {
      path: '/tipo-de-viaje',
      name: 'tipo-de-viaje',
      component: () => import('./pages/BusinessLine.vue')
    }
  ]
})

