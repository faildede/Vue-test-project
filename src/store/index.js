import Vue from 'vue'
import Vuex from 'vuex'
import info from './info/info.js'
import PartnerInfo from './info/PartnerInfo'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    info,
    PartnerInfo
  }
})
