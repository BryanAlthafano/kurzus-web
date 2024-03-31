import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useVideoCourseStore = defineStore('VideoCourse', {
  state: () => {
    return {
      selectedVideoCourse: null
    }
  },
  actions: {
    SET_DATA (payload) {
      this[payload.key] = payload.data
    }
  },
  getters: {
    getSelectedVideoCourse: state => {
      return state.selectedVideoCourse
    }
  },
  persist: {
    storage: localStorage,
    path: ['selectedVideoCourse']
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useVideoCourseStore, import.meta.hot))
}
