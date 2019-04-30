import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import store from '@/store/index'

Vue.use(VueRouter)
Vue.use(Meta)

import Home from '@/pages/Home'
import HomeView from '@/pages/HomeView'
import SellerForm from '@/pages/SellerForm'
import AfterSubmitForm from '@/pages/AfterSubmitForm'

import TosView from '@/pages/tos/TosView'
import UserPrivacy from '@/pages/tos/current/UserPrivacy'
import UserService from '@/pages/tos/current/UserService'
import CeoPrivacy from '@/pages/tos/current/CeoPrivacy'
import CeoService from '@/pages/tos/current/CeoService'

import RedirectDL from '@/pages/RedirectDL'

function requireToken(to, from, next) {
  if (store.state.tokenState === true)
    return next()
  next('/sellerform')
}

export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '*',
      redirect: '/'
    },

    {
      path: '/',
      component: Home,
      children: [{
          path: '/',
          name: 'homeView',
          component: HomeView,
        },
        {
          path: '/sellerform',
          name: 'sellerForm',
          component: SellerForm,
        },
        {
          path: '/submit',
          name: 'afterSubmitForm',
          component: AfterSubmitForm,
          beforeEnter: requireToken,
        },
      ]
    },

    {
      path: '/tos',
      component: TosView,
      children: [{
          path: 'user/privacy',
          name: 'privacy',
          component: UserPrivacy,
        },
        {
          path: 'user/service',
          name: 'UserService',
          component: UserService,
        },
        {
          path: 'ceo/privacy',
          name: 'CeoPrivacy',
          component: CeoPrivacy,
        },
        {
          path: 'ceo/service',
          name: 'CeoService',
          component: CeoService,
        },
      ]
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
