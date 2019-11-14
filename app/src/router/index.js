import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/invite/SC917we54',
    name: 'home',
    component: Home
  },
  {
    path: '/invite/:invite',
    name: 'invite',
    component: Home
  },
  {
    path: '/call',
    name: 'call',
    // route level code-splitting
    // this generates a separate chunk (call.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "call" */ '../views/Call.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
