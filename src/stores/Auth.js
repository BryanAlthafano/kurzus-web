import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { CLIENT_ID, CLIENT_SECRET } from 'app/config'

export const useAuthStore = defineStore('Auth', {
  state: () => {
    return {
      userData: null,
      token: null
    }
  },
  actions: {
    doRegister (payload) {
      return new Promise((resolve, reject) => {
        const access = {
          grant_type: 'password',
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          ...payload
        }
        api
          .post(`/user/register`, access)
          .then(result => {
            const { access_token, user } = result.data
            api.defaults.headers.common.Accept = 'application/json'
            api.defaults.headers.common.Authorization = `Bearer ${access_token}`
            this.token = access_token
            this.userData = user
            resolve(result.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    doLogin (payload) {
      return new Promise((resolve, reject) => {
        api
          .post(`/user/login`, payload)
          .then(result => {
            const { access_token, user } = result.data
            this.token = access_token
            this.userData = user
            resolve(result.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    CLEAR_DATA (payload) {
      this.token = null
      this.userData = null
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.userData !== null ? true : false
    },
    getToken: state => {
      return state.token
    },
    getUserData: state => {
      return state.userData
    }
  },
  persist: {
    storage: localStorage
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
