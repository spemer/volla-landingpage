import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

import Home from '@/pages/Home'
import Privacy from '@/pages/tos/Privacy'
import TermsSite from '@/pages/tos/TermsSite'
import TermsProduct from '@/pages/tos/TermsProduct'
import RedirectDL from '@/pages/RedirectDL'

export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/tos/privacy',
      name: 'privacy',
      component: Privacy,
    },
    {
      path: '/tos/terms-product',
      name: 'term-product',
      component: TermsProduct,
    },
    {
      path: '/tos/terms-site',
      name: 'term-site',
      component: TermsSite,
    },
    {
      path: '/app',
      component: RedirectDL,
    },
  ]
})
