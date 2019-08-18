import Vue from "vue";
import Router from "vue-router";
import VueMeta from "vue-meta";
import store from "@/store/index";

Vue.use(Router);
Vue.use(VueMeta);

const requireToken = (to, from, next) => {
  store.state.tokenState && next();
  next("/sellerform/");
};

// NoticeEntries
import NoticesEntries from "@/statics/data/notices.json";
const noticesRoutes = Object.keys(NoticesEntries).map(section => {
  const children = NoticesEntries[section].map(child => ({
    path: `${child.ymd}/${child.id}`,
    name: `${child.id}`,
    component: () =>
      import(
        /* webpackChunkName: 'router-Details-markdown' */ `@/markdowns/notice/markdown/${child.id}.md`
      )
  }));
  return {
    path: `/`,
    name: `noticeDetails`,
    component: () =>
      import(/* webpackChunkName: 'router-Details' */ "@/pages/boards/Details"),
    children
  };
});

// TosEntries
import TosEntries from "@/statics/data/tos.json";
const tosRoutes = Object.keys(TosEntries).map(section => {
  const children = TosEntries[section].map(child => ({
    path: "/tos/:id",
    name: child.id,
    component: () =>
      import(
        /* webpackChunkName: 'router-TosDetails-markdown' */ `@/markdowns/tos/${section}/${child.id}.md`
      )
  }));
  return {
    path: "/tos/:id",
    name: section,
    component: () =>
      import(
        /* webpackChunkName: 'router-TosDetails' */ "@/pages/tos/TosDetails"
      ),
    children
  };
});

// Router
export default new Router({
  mode: "history",
  functional: true,
  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/seller-form",
      redirect: "/sellerform/"
    },
    {
      path: "/seller",
      redirect: "/benefits/"
    },

    // app
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: 'router-Home' */ "@/pages/Home"),
      children: [
        {
          path: "/",
          name: "homeView",
          component: () =>
            import(/* webpackChunkName: 'router-HomeView' */ "@/pages/HomeView")
        },
        {
          path: "/benefits/",
          name: "benefits",
          component: () =>
            import(/* webpackChunkName: 'router-Benefits' */ "@/pages/Benefits")
        },
        {
          path: "/sellerform/",
          alias: "/sellerform-app/",
          name: "sellerForm",
          component: () =>
            import(
              /* webpackChunkName: 'router-SellerForm' */ "@/pages/seller/SellerForm"
            )
        },
        {
          path: "/submit/",
          alias: "/submit-app/",
          name: "afterSubmitForm",
          component: () =>
            import(
              /* webpackChunkName: 'router-AfterSubmitForm' */ "@/pages/seller/AfterSubmitForm"
            ),
          beforeEnter: requireToken
        }
      ]
    },

    // mobile notice lists
    ...noticesRoutes,
    {
      path: "/notice",
      redirect: "/notices/"
    },
    {
      path: "/notices/",
      name: "notices",
      component: () =>
        import(
          /* webpackChunkName: 'router-Notices' */ "@/pages/boards/Notices"
        )
    },

    // tos
    ...tosRoutes,
    {
      path: "/tos/user/privacy",
      redirect: "/tos/user_privacy"
    },
    {
      path: "/tos/user/service",
      redirect: "/tos/user_service"
    },
    {
      path: "/tos/ceo/privacy",
      redirect: "/tos/ceo_privacy"
    },
    {
      path: "/tos/ceo/service",
      redirect: "/tos/ceo_service"
    },

    // seller special pages
    {
      path: "/sellers",
      children: [
        {
          path: "/sumin/",
          name: "sellers_sumin",
          components: () =>
            import(
              /* webpackChunkName: 'router-sellers-sumin' */ "@/pages/marketing/sellers/Sellers-Sumin"
            )
        }
      ]
    },

    // appstore download link
    {
      path: "/app",
      name: "redirect_dl",
      component: () =>
        import(/* webpackChunkName: 'router-RedirectDL' */ "@/pages/RedirectDL")
    },

    // in-app landing page
    {
      path: "/event_landing/",
      name: "eventLanding",
      component: () =>
        import(
          /* webpackChunkName: 'router-EventLanding' */ "@/pages/marketing/EventLanding"
        )
    }
  ],

  // scrollBehavior
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition
      ? savedPosition
      : {
          x: 0,
          y: 0
        };
  }
});
