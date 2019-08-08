import "es6-promise/auto";
import "event-source-polyfill";
import "promise-polyfill/src/polyfill";

import Vue from "vue";
import axios from "axios";
import App from "@/App.vue";
import store from "@/store";
import router from "@/routes";

import VueScrollTo from "vue-scrollto";
import VueProgressBar from "vue-progressbar";
Vue.use(VueScrollTo);
Vue.use(VueProgressBar, {
  color: "rgb(255, 121, 172)",
  failedColor: "rgb(255, 121, 172)",
  height: "4px"
});

import "vue2-toast/lib/toast.css";
import Toast from "vue2-toast";
Vue.use(Toast, {
  type: "bottom",
  duration: 2500,
  wordWrap: true
});

// font-awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
