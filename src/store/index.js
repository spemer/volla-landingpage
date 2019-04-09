import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  debug: true,

  state: {
    thisYear: new Date().getFullYear(),

  },

  mutations: {

  },
})
