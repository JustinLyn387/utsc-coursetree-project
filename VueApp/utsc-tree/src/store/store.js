import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coursePage: true,
    treeViewPage: true,
    infoPage: true
  },
  mutations: {
    coursePageToggle: (state) => {
      state.coursePage = !state.coursePage
    },
    coursePageSwitch: (state, newState) => {
      state.coursePage = newState
    },
    treePageToggle: (state) => {
      state.treeViewPage = !state.treeViewPage
    },
    treePageSwitch: (state, newState) => {
      state.treeViewPage = newState
    },
    infoPageToggle: (state) => {
      state.infoPage = !state.infoPage
    },
    infoPageSwitch: (state, newState) => {
      state.infoPage = newState
    }
  },
  actions: {
    loadStore (context) {
      return new Promise((resolve, reject) => {
        axios.get('http://127.0.0.1:5000/DataRetrieval/pageStatus/*')
          .then(response => {
            context.commit('coursePageSwitch', response.data[0][0] === 1)
            context.commit('treePageSwitch', response.data[1][0] === 1)
            context.commit('infoPageSwitch', response.data[2][0] === 1)
            resolve()
          })
          .catch((e) => {
            reject(e)
          })
      })
    }
  }

})
