import "es6-promise/auto";
import "promise-polyfill/src/polyfill";

import Vue from "vue";
import axios from "axios";
import App from "@/App.vue";
import store from "@/store";
import router from "@/routes";

import Toast from "vue2-toast";
Vue.use(Toast, {
  type: "bottom",
  duration: 2500,
  wordWrap: true
});

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  }
});
