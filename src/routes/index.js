import Vue from 'vue'
import Meta from 'vue-meta'
import VueRouter from 'vue-router'
import store from '@/store/index'

import Home from '@/pages/Home'
import HomeView from '@/pages/HomeView'
import SellerForm from '@/pages/SellerForm'
import AfterSubmitForm from '@/pages/AfterSubmitForm'
import Microsite from '@/pages/Microsite'

import TosView from '@/pages/tos/TosView'
import UserPrivacy from '@/pages/tos/current/UserPrivacy'
import UserService from '@/pages/tos/current/UserService'
import CeoPrivacy from '@/pages/tos/current/CeoPrivacy'
import CeoService from '@/pages/tos/current/CeoService'

import RedirectDL from '@/pages/RedirectDL'

Vue.use(Meta)
Vue.use(VueRouter)

function requireToken(to, from, next) {
  if (store.state.tokenState) return next()
  next('/sellerform')
}

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '*',
      redirect: '/'
    },
    {
      path: '/seller-form',
      redirect: '/sellerform',
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
          path: '/seller',
          name: 'microsite',
          component: Microsite,
          meta: {
            gtm: 'Volla_Web_Page View_Seller',
          },
        },
        {
          path: '/sellerform',
          name: 'sellerForm',
          component: SellerForm,
          meta: {
            gtm: 'Volla_Web_Page View_SellerForm',
          },
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
          name: 'UserPrivacy',
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

  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition)
      return savedPosition
    else {
      return {
        x: 0,
        y: 0
      }
    }
  },
})

export default router
