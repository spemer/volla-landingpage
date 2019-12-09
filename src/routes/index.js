import Vue from "vue";
import Router from "vue-router";
import VueMeta from "vue-meta";
import store from "@/store/index";

import tosRoutes from "@/routes/modules/tosRoutes";
import noticesRoutes from "@/routes/modules/noticesRoutes";

Vue.use(Router);
Vue.use(VueMeta);

const requireToken = (to, from, next) => {
  store.state.tokenState && next();
  next("/sellerform");
};

// Router
export default new Router({
  mode: "history",
  functional: true,
  routes: [
    {
      path: "/sellerform-app",
      redirect: {
        path: "/sellerform",
        query: {
          from: "app"
        }
      }
    },
    {
      path: "/submit-app",
      redirect: {
        path: "/submit",
        query: {
          from: "app"
        }
      }
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
          path: "/benefits",
          name: "benefits",
          component: () =>
            import(/* webpackChunkName: 'router-Benefits' */ "@/pages/Benefits")
        },
        {
          path: "/sellerform",
          name: "sellerForm",
          component: () =>
            import(
              /* webpackChunkName: 'router-SellerForm' */ "@/pages/sellerform/SellerForm"
            )
        },
        {
          path: "/submit",
          name: "afterSubmitForm",
          component: () =>
            import(
              /* webpackChunkName: 'router-AfterSubmitForm' */ "@/pages/sellerform/AfterSubmitForm"
            ),
          beforeEnter: requireToken
        }
      ]
    },

    // mobile notice lists
    ...noticesRoutes,
    {
      path: "/notice",
      redirect: "/notices"
    },
    {
      path: "/notices",
      name: "notices",
      component: () =>
        import(
          /* webpackChunkName: 'router-Notices' */ "@/pages/boards/Notices"
        )
    },

    // guide
    {
      path: "/guide/live",
      redirect: {
        path: "/guide",
        query: {
          type: "live"
        }
      }
    },
    {
      path: "/guide/prism",
      redirect: {
        path: "/guide",
        query: {
          type: "prism"
        }
      }
    },

    {
      path: "/guide",
      name: "guide",
      component: () =>
        import(/* webpackChunkName: 'router-Guide' */ "@/pages/guide/Guide")
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

    // event
    {
      path: "/event",
      component: () =>
        import(/* webpackChunkName: 'router-Event' */ "@/pages/event/Event"),
      children: [
        {
          path: "airpods",
          name: "airpods",
          component: () =>
            import(
              /* webpackChunkName: 'router-Event-Airpods' */ "@/pages/event/details/Airpods"
            )
        }
      ]
    },

    // seller special pages
    {
      path: "/seller",
      component: () =>
        import(
          /* webpackChunkName: 'router-sellerPage' */ "@/pages/sellerPage/Seller"
        ),
      children: [
        {
          path: "sumin",
          name: "seller-sumin",
          component: () =>
            import(
              /* webpackChunkName: 'router-sellerPage-sumin' */ "@/pages/sellerPage/seller/Sumin"
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
      path: "/event_landing",
      name: "eventLanding",
      component: () =>
        import(
          /* webpackChunkName: 'router-EventLanding' */ "@/pages/marketing/EventLanding"
        )
    },

    {
      path: "*",
      redirect: "/",
      hidden: true
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
