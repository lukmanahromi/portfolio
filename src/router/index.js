import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import Certificate from '../views/Certificate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/certificate',
    name: 'Certificate',
    component: Certificate
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
