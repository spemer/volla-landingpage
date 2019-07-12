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
import VueProgressBar from 'vue-progressbar'

Vue.use(VTooltip)
Vue.use(Toasted)
Vue.use(VueScrollTo)
Vue.use(VueClipboard)
Vue.use(VueProgressBar, {
  color: 'rgb(255, 121, 172)',
  failedColor: 'rgb(255, 121, 172)',
  height: '4px',
})

import AOS from 'aos'
import 'aos/dist/aos.css'

// import Firebase from 'firebase/app'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Kakao.init(process.env.KAKAO_KEY)

new Vue({
  created() {
    AOS.init({
      delay: 0,
      offset: 160,
      duration: 500,
      once: true,
    })
  },
  el: '#app',
  store,
  router,
  render: h => h(App),
})
