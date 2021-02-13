import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {

    path: '/',
    name: 'Meny',
    component: () => import(/* webpackChunkName: "meny" */ '../views/Meny.vue')

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/Profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "meny" */ '../views/Profile.vue')

  },



]

const router = new VueRouter({
  routes
})

export default router
