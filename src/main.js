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
import Firebase from 'firebase/app'
import VueFirestore from 'vue-firestore'
import VueScrollTo from 'vue-scrollto'
import VueClipboard from 'vue-clipboard2'
import VueProgressBar from 'vue-progressbar'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Kakao.init(process.env.KAKAO_KEY)

Vue.use(Toasted)
Vue.use(VTooltip)
Vue.use(VueScrollTo)
Vue.use(VueClipboard)
Vue.use(VueProgressBar, {
  color: 'rgb(255, 121, 172)',
  failedColor: 'rgb(255, 121, 172)',
  height: '4px',
})

require('firebase/firestore')
Vue.use(VueFirestore)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})
