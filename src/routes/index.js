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

function requireAuth(to, from, next) {
  if (
    store.state.sellerForm_List[0].value &&
    store.state.sellerForm_List[1].value &&
    store.state.sellerForm_List[2].value &&
    store.state.sellerForm_CategoryValue.value
  ) {
    return next()
  }
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
          beforeEnter: requireAuth,
        },
      ]
    },
    {
      path: '/tos',
      component: TosView,
      children: [{
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
