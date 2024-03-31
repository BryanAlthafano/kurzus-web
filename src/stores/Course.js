import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useCourseStore = defineStore('Course', {
  state: () => {
    return {
      selectedCourse: null
    }
  },
  actions: {
    SET_DATA (payload) {
      this[payload.key] = payload.data
    }
  },
  getters: {
    getSelectedCourse: state => {
      return state.selectedCourse
    }
  },
  persist: {
    storage: localStorage,
    path: ['selectedCourse']
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCourseStore, import.meta.hot))
}
