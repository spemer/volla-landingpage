import 'babel-polyfill'
import 'es6-promise/auto'
import 'event-source-polyfill'
import 'promise-polyfill/src/polyfill'

import Vue from 'vue'
import axios from 'axios'
import App from '@/App.vue'
import router from '@/routes'
import VTooltip from 'v-tooltip'
import VueScrollTo from 'vue-scrollto'

import {globalVar} from '@/globalVar'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VTooltip)
Vue.use(VueScrollTo)
Kakao.init(process.env.KAKAO_KEY)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
