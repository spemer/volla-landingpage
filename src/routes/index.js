import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'
import store from '@/store/index'

Vue.use(Meta)
Vue.use(Router)

const requireToken = (to, from, next) => {
  if (store.state.tokenState) {
    return next()
  }
  next('/sellerform')
}

// NoticeEntries
import NoticeEntries from '@/statics/data/notice.json'

const noticeRoutes = Object.keys(NoticeEntries).map(section => {
  const children = NoticeEntries[section].map(child => ({
    path: `${child.ymd}/${child.id}`,
    name: child.id,
    component: _ => {
      return import(`@/markdowns/notice/markdown/${child.id}.md`)
    },
  }))
  return {
    path: `/${section}`,
    name: section,
    component: _ => {
      return import('@/pages/boards/Details')
    },
    children,
  }
})

// TosEntries
import TosEntries from '@/statics/data/tos.json'

const tosRoutes = Object.keys(TosEntries).map(section => {
  const children = TosEntries[section].map(child => ({
    path: '/tos/:id',
    name: child.id,
    component: _ => {
      return import(`@/markdowns/tos/${section}/${child.id}.md`)
    },
  }))
  return {
    path: '/tos/:id',
    name: section,
    component: _ => {
      return import('@/pages/tos/TosDetails')
    },
    children,
  }
})

// Router
export default new Router({
  mode: 'history',
  functional: true,
  routes: [
    ...noticeRoutes,
    ...tosRoutes,
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
      component: _ => {
        return import('@/pages/Home')
      },
      children: [{
          path: '/',
          name: 'homeView',
          component: _ => {
            return import('@/pages/HomeView')
          },
        },
        {
          path: '/seller',
          name: 'microsite',
          component: _ => {
            return import('@/pages/Microsite')
          },
        },
        {
          path: '/sellerform',
          alias: '/sellerform-app',
          name: 'sellerForm',
          component: _ => {
            return import('@/pages/seller/SellerForm')
          },
        },
        {
          path: '/submit',
          alias: '/submit-app',
          name: 'afterSubmitForm',
          component: _ => {
            return import('@/pages/seller/AfterSubmitForm')
          },
          beforeEnter: requireToken,
        },
      ],
    },
    {
      path: '/notices',
      name: 'notices',
      component: _ => {
        return import('@/pages/boards/Notices')
      },
    },
    {
      path: '/app',
      name: 'redirect_dl',
      component: _ => {
        return import('@/pages/RedirectDL')
      },
    },
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
  ],

  // scrollBehavior
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition)
      return savedPosition
    else {
      return {
        x: 0,
        y: 0,
      }
    }
  },
})
