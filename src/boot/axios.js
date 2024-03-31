import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { Notify } from 'quasar'
import { API_URL } from 'app/config'
import { useAuthStore } from 'src/stores/Auth'

const api = axios.create({ baseURL: API_URL })

export default boot(({ app }) => {
  const authStore = useAuthStore()
  const token = authStore.getToken

  if (token !== null) {
    api.defaults.headers.common.Accept = 'application/json'
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api

  api.interceptors.response.use(
    config => {
      return config
    },
    error => {
      if (error.response.status === 401) {
        authStore.CLEAR_DATA()
        Notify.create({
          message: 'Please login again',
          position: 'top-right',
          icon: 'mdi-alert'
        })
      } else if (
        error.response.status === 422 ||
        error.response.status === 400
      ) {
        Notify.create({
          message: error.response.data.message,
          position: 'top-right',
          icon: 'mdi-alert'
        })
      }
      return Promise.reject(error)
    }
  )
})

export { api }
