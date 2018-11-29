import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

import RedirectDL from '@/pages/RedirectDL'

Vue.use(VueRouter)
Vue.use(Meta)

import Home from '@/pages/Home'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/app',
      component: RedirectDL,
    },
  ]
})
