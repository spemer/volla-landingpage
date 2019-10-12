import "es6-promise/auto";
import "promise-polyfill/src/polyfill";

import Vue from "vue";
// import axios from "axios";
import App from "@/App.vue";
import store from "@/store";
import router from "@/routes";

import VueProgressBar from "vue-progressbar";
Vue.use(VueProgressBar, {
  color: "#ff82ab",
  failedColor: "#ff82ab",
  height: "4px"
});

import Toast from "vue2-toast";
Vue.use(Toast, {
  type: "bottom",
  duration: 2500,
  wordWrap: true
});

Vue.config.productionTip = false;
window.Kakao.init(process.env.VUE_APP_KAKAO_KEY);
Vue.config.performance = true;
// Vue.prototype.$http = axios;

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
