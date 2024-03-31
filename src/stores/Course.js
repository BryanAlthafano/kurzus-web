import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useCourseStore = defineStore('Course', {
  state: () => {
    return {
      selectedVideoCourse: null,
      selectedCourse: null,
      videoCourseData: [],
      courseData: []
    }
  },
  actions: {
    getCourse () {
      return new Promise((resolve, reject) => {
        api
          .get(`/user/course`)
          .then(result => {
            const { data } = result
            this.courseData = data
            resolve(result.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getVideoCourse () {
      return new Promise((resolve, reject) => {
        api
          .get(`/user/video-course`)
          .then(result => {
            const { data } = result
            this.videoCourseData = data
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
    getSelectedCourse: state => {
      return state.selectedCourse
    },
    getSelectedVideoCourse: state => {
      return state.selectedVideoCourse
    },
    course: state => {
      return state.courseData
    },
    videoCourse: state => {
      return state.videoCourseData
    }
  },
  persist: {
    storage: localStorage,
    paths: ['selectedCourse', 'selectedVideoCourse']
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCourseStore, import.meta.hot))
}
