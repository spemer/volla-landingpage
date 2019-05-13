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

Vue.config.productionTip = true
Vue.prototype.$http = axios
Kakao.init(process.env.KAKAO_KEY)

Vue.use(Toasted)
Vue.use(VTooltip)
Vue.use(VueScrollTo)
Vue.use(VueClipboard)
Vue.use(VueProgressBar, {
  color: 'rgb(255, 121, 172)',
  failedColor: 'rgb(255, 121, 172)',
  height: '4px'
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

ga('set', 'page', router.currentRoute.path)
ga('send', 'pageview')

router.afterEach((to, from) => {
  ga('set', 'page', to.path)
  ga('send', 'pageview')
})
