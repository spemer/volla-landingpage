import 'babel-polyfill'
import 'es6-promise/auto'
import 'event-source-polyfill'
import 'promise-polyfill/src/polyfill'

import Vue from 'vue'
import axios from 'axios'
import App from '@/App.vue'
import store from '@/store'
import router from '@/routes'
import VTooltip from 'v-tooltip'
import Toasted from 'vue-toasted'
import VueScrollTo from 'vue-scrollto'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(Toasted)
Vue.use(VTooltip)
Vue.use(VueScrollTo)
Vue.use(VueClipboard)
Kakao.init(process.env.KAKAO_KEY)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
