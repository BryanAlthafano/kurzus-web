import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useAuthStore = defineStore('Auth', {
  state: () => {
    userData: null
  },
  actions: {
    doLogin ({ commit }, credential) {
      return new Promise((resolve, reject) => {
        api
          .post(`/api/login`, credential)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    isLoggedIn: state => {
      return false
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
