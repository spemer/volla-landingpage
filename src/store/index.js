import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {
  globalVar
} from '@/globalVar'

import state from '@/store/state.js'
import getters from '@/store/getters.js'
import mutations from '@/store/mutations.js'
import actions from '@/store/actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
