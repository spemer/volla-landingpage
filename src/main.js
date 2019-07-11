import 'babel-polyfill'
import 'es6-promise/auto'
import 'event-source-polyfill'
import 'promise-polyfill/src/polyfill'
import 'core-js/modules/es6.promise'
import 'core-js/modules/es6.array.iterator'

import Vue from 'vue'
import axios from 'axios'
import App from '@/App.vue'
import store from '@/store'
import router from '@/routes'

import VTooltip from 'v-tooltip'
Vue.use(VTooltip)

import Toasted from 'vue-toasted'
Vue.use(Toasted)

import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: 'rgb(255, 121, 172)',
  failedColor: 'rgb(255, 121, 172)',
  height: '4px',
})

// import Firebase from 'firebase/app'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Kakao.init(process.env.KAKAO_KEY)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})
