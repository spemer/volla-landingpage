import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'
import store from '@/store/index'

Vue.use(Meta)
Vue.use(Router)

const requireToken = (to, from, next) => {
  (store.state.tokenState) && next()
  next('/sellerform')
}

// NoticeEntries
import NoticeEntries from '@/statics/data/notice.json'

const noticeRoutes = Object.keys(NoticeEntries).map(section => {
  const children = NoticeEntries[section].map(child => ({
    path: `${child.ymd}/:id`,
    name: `${child.id}`,
    component: () => import(`@/markdowns/notice/markdown/${child.id}.md`),
  }))
  return {
    path: `/${section}`,
    name: `${section}`,
    component: () => import('@/pages/boards/Details'),
    children,
  }
})

// TosEntries
import TosEntries from '@/statics/data/tos.json'

const tosRoutes = Object.keys(TosEntries).map(section => {
  const children = TosEntries[section].map(child => ({
    path: '/tos/:id',
    name: child.id,
    component: () => import(`@/markdowns/tos/${section}/${child.id}.md`),
  }))
  return {
    path: '/tos/:id',
    name: section,
    component: () => import('@/pages/tos/TosDetails'),
    children,
  }
})

// Router
export default new Router({
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

    // app
    {
      path: '/',
      component: () => import('@/pages/Home'),
      children: [{
          path: '/',
          name: 'homeView',
          component: () => import('@/pages/HomeView'),
        },
        {
          path: '/seller',
          name: 'microsite',
          component: () => import('@/pages/Microsite'),
        },
        {
          path: '/sellerform',
          alias: '/sellerform-app',
          name: 'sellerForm',
          component: () => import('@/pages/seller/SellerForm'),
        },
        {
          path: '/submit',
          alias: '/submit-app',
          name: 'afterSubmitForm',
          component: () => import('@/pages/seller/AfterSubmitForm'),
          beforeEnter: requireToken,
        },
      ],
    },

    // mobile notice lists
    ...noticeRoutes,
    {
      path: '/notice',
      redirect: '/notices',
    },
    {
      path: '/notices',
      name: 'notices',
      component: () => import('@/pages/boards/Notices'),
    },

    // tos
    ...tosRoutes,
    {
      path: '/tos/user/privacy',
      redirect: '/tos/user_privacy',
    },
    {
      path: '/tos/user/service',
      redirect: '/tos/user_service',
    },
    {
      path: '/tos/ceo/privacy',
      redirect: '/tos/ceo_privacy',
    },
    {
      path: '/tos/ceo/service',
      redirect: '/tos/ceo_service',
    },

    // appstore download link
    {
      path: '/app',
      name: 'redirect_dl',
      component: () => import('@/pages/RedirectDL'),
    },

    // in-app landing page
    {
      path: '/event_landing',
      name: 'eventLanding',
      component: () => import('@/pages/EventLanding'),
    },
  ],

  // scrollBehavior
  scrollBehavior: (to, from, savedPosition) => {
    return (savedPosition) ? savedPosition : {
      x: 0,
      y: 0,
    }
  },
})
