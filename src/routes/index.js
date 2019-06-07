import Vue from 'vue'
import Meta from 'vue-meta'
import VueRouter from 'vue-router'
import store from '@/store/index'

Vue.use(Meta)
Vue.use(VueRouter)

import Home from '@/pages/Home'
import HomeView from '@/pages/HomeView'
import SellerForm from '@/pages/seller/SellerForm'
import AfterSubmitForm from '@/pages/seller/AfterSubmitForm'
import Microsite from '@/pages/Microsite'

import Lists from '@/pages/boards/Lists'

import TosView from '@/pages/tos/TosView'
import UserPrivacy from '@/pages/tos/current/UserPrivacy'
import UserService from '@/pages/tos/current/UserService'
import CeoPrivacy from '@/pages/tos/current/CeoPrivacy'
import CeoService from '@/pages/tos/current/CeoService'

import RedirectDL from '@/pages/RedirectDL'

const requireToken = (to, from, next) => {
  if (store.state.tokenState) {
    return next()
  }
  next('/sellerform')
}

export default new VueRouter({
  mode: 'history',
  functional: true,
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
        },
        {
          path: '/sellerform',
          alias: '/sellerform-app',
          name: 'sellerForm',
          component: SellerForm,
        },
        {
          path: '/submit',
          alias: '/submit-app',
          name: 'afterSubmitForm',
          component: AfterSubmitForm,
          beforeEnter: requireToken,
        },
      ],
    },
    {
      path: '/notice',
      name: 'notice',
      component: Lists,
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
      ],
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
