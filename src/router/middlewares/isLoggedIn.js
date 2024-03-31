import { useAuthStore } from 'src/stores/Auth'

const isLoggedIn = function (to, from, next) {
  const authStore = useAuthStore()
  const status = authStore.isLoggedIn

  if (status) next()
  else next('/login')
}

export default isLoggedIn
