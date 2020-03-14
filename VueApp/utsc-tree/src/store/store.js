import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coursePage: true,
    treeViewPage: true,
    infoPage: true,
    alreadyLoaded: false,
    devMessages: [],
    releaseNotes: []
  },
  mutations: {
    loadedData: (state) => {
      state.alreadyLoaded = !state.alreadyLoaded
    },
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
    },
    postMessage: (state, message) => {
      state.devMessages.push(message)
    },
    publishNote: (state, note) => {
      state.releaseNotes.push(note)
    },
    loadMessages: (state, messages) => {
      state.devMessages = messages
    },
    loadNotes: (state, notes) => {
      state.releaseNotes = notes
    }
  },
  actions: {
    loadStore (context) {
      if (!context.state.alreadyLoaded) {
        // axios call to load data on initial entry
        return new Promise((resolve, reject) => {
          axios.get('http://127.0.0.1:5000/DataRetrieval/dataLoad')
            .then(response => {
              // load the page locks
              context.commit('coursePageSwitch', response.data[0][0][0] === 1)
              context.commit('treePageSwitch', response.data[0][1][0] === 1)
              context.commit('infoPageSwitch', response.data[0][2][0] === 1)
              // load the dev messages and update notes
              context.commit('loadMessages', response.data[1])
              context.commit('loadNotes', response.data[2])
              // set flag so we don't keep loading new data unless refreshed the page
              context.commit('loadedData')
              resolve()
            })
            .catch((e) => {
              reject(e)
            })
        })
      }
    }
  }

})
