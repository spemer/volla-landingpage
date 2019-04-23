import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

import Home from '@/pages/Home'
import sellerForm from '@/pages/sellerForm'
import UserPrivacy from '@/pages/tos/UserPrivacy'
import UserService from '@/pages/tos/UserService'
import CeoPrivacy from '@/pages/tos/CeoPrivacy'
import CeoService from '@/pages/tos/CeoService'
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
      path: '/sellerform',
      name: 'sellerForm',
      component: sellerForm,
    },
    {
      path: '/tos/user/privacy',
      name: 'privacy',
      component: UserPrivacy,
    },
    {
      path: '/tos/user/service',
      name: 'UserService',
      component: UserService,
    },
    {
      path: '/tos/ceo/privacy',
      name: 'CeoPrivacy',
      component: CeoPrivacy,
    },
    {
      path: '/tos/ceo/service',
      name: 'CeoService',
      component: CeoService,
    },
    {
      path: '/app',
      component: RedirectDL,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
})
