import { createStore } from 'vuex'

export default createStore({
  state: {
    gameStarted: false,
    gameEnded: false,
    savePlayerFormVisible: false,
    reactionTime: 0
  },
  mutations: {
    startGame(state) {
      state.gameStarted = true
      state.gameEnded = false
      state.reactionTime = 0
    },
    endGame(state) {
      state.gameStarted = false
      state.gameEnded = true
    },
    setReactionTime(state, time) {
      state.reactionTime = time
    },
    toggleSavePlayerForm(state) {
      state.savePlayerFormVisible = !state.savePlayerFormVisible
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
