import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../views/Hello.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/store',
    name: 'StoreTest',
    component: () => import(/* webpackChunkName: "store" */ '../views/StoreTest.vue')
  },
  {
    path: '/map-state',
    name: 'MapState',
    component: () => import(/* webpackChunkName: "map-state" */ '../views/MapState.vue')
  },
  {
    path: '/search',
    name: 'MapStateSearch',
    component: () => import(/* webpackChunkName: "map-state-search" */ '../views/MapStateSearch.vue')
  },
  {
    path: '/change',
    name: 'MapStateMutations',
    component: () => import(/* webpackChunkName: "map-state-search" */ '../views/MapStateMutations.vue')
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
