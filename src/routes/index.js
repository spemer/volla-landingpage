import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'
import store from '@/store/index'

Vue.use(Meta)
Vue.use(Router)

import Home from '@/pages/Home'
import HomeView from '@/pages/HomeView'
import SellerForm from '@/pages/seller/SellerForm'
import AfterSubmitForm from '@/pages/seller/AfterSubmitForm'
import Microsite from '@/pages/Microsite'

const requireToken = (to, from, next) => {
  if (store.state.tokenState) {
    return next()
  }
  next('/sellerform')
}

import TosView from '@/pages/tos/TosView'
import UserPrivacy from '@/pages/tos/current/UserPrivacy'
import UserService from '@/pages/tos/current/UserService'
import CeoPrivacy from '@/pages/tos/current/CeoPrivacy'
import CeoService from '@/pages/tos/current/CeoService'

import RedirectDL from '@/pages/RedirectDL'

import Notices from '@/pages/boards/Notices'
import Details from '@/pages/boards/Details'
import NoticeEntries from '@/statics/data/notice.json'

const noticeRoutes = Object.keys(NoticeEntries).map(section => {
  const children = NoticeEntries[section].map(child => ({
    path: `${child.ymd}/${child.id}`,
    name: child.id,
    component: resolve => require([`@/notices/markdowns/${child.id}.md`], resolve),
  }))
  return {
    path: `/${section}`,
    name: section,
    component: Details,
    children,
  }
})

export default new Router({
  mode: 'history',
  functional: true,
  routes: [
    ...noticeRoutes,
    {
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
      path: '/notices',
      name: 'notices',
      component: Notices,
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
      name: 'redirect_dl',
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
