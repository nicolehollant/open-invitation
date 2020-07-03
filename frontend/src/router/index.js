import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Featured',
    component: () => import('../views/Featured.vue')
  },
  {
    path: '/archive',
    name: 'Archive',
    component: () => import('../views/Archive.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/get-involved',
    name: 'GetInvolved',
    component: () => import('../views/GetInvolved.vue')
  },
  {
    path: '/exhibit/:slug',
    name: 'Exhibit',
    component: () => import('../views/Exhibit.vue')
  },
  {
    path: '/exhibit',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
