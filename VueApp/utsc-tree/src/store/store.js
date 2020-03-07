import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    coursePage: true,
    treeViewPage: true,
    infoPage: true
  },
  mutations: {
    coursePageToggle (state) {
      state.coursePage = !state.coursePage
    },
    treePageToggle (state) {
      state.treeViewPage = !state.treeViewPage
    },
    infoPageToggle (state) {
      state.infoPage = !state.infoPage
    }
  },
  getters: {
    coursePage: state => {
      return state.coursePage
    },
    treeViewPage: state => {
      return state.treeViewPage
    },
    infoPage: state => {
      return state.infoPage
    }
  }

})

export default store
