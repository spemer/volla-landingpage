import Vue from 'vue'
import Vuex from 'vuex'

import { state } from '@/store/state.js'
import { mutations } from '@/store/mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
})
