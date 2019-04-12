import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {
  globalVar
} from '@/globalVar'

Vue.use(Vuex)

export default new Vuex.Store({
  debug: true,

  state: {
    thisYear: new Date().getFullYear(),

    badges: {
      Android: {
        src: '/src/assets/dist/playstore.png',
        title: 'Google Play',
        href: globalVar.androidStore,
      },
      iOS: {
        src: '/src/assets/dist/appstore.png',
        title: 'App Store',
        href: globalVar.iosStore,
      },
    },

  },

  mutations: {

  },
})
