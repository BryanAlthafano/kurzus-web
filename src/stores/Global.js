import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useGlobalStore = defineStore('Global', {
  state: () => {
    return {
      isLoading: false,
      feedbackData: [],
      quizData: []
    }
  },
  actions: {
    getQuiz () {
      return new Promise((resolve, reject) => {
        api
          .get(`/user/quiz`)
          .then(result => {
            const { data } = result
            this.quizData = data
            resolve(result.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getFeedback () {
      return new Promise((resolve, reject) => {
        api
          .get(`/user/feedback`)
          .then(result => {
            const { data } = result
            this.feedbackData = data
            resolve(result.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    SET_DATA (payload) {
      this[payload.key] = payload.data
    }
  },
  getters: {
    getIsLoading: state => {
      return state.isLoading
    },
    feedback: state => {
      return state.feedbackData
    },
    quiz: state => {
      return state.quizData
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}
