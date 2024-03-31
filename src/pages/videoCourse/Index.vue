<template>
  <q-page class="custom-page" v-if="videoCourseData?.length">
    <div class="row justify-between">
      <p class="custom-title self-center">Video Course</p>
      <!-- <div>
        <CustomTextInput
          :modelValue="searchModel"
          :rounded="true"
          :placeholder="'Search...'"
          :prependIconName="'mdi-magnify'"
          @update:modelValue="val => (searchModel = val)"
        />
      </div> -->
    </div>
    <!-- <div class="row justify-center q-mt-lg">
      <div v-for="(item, index) in categories" :key="index" style="width: 70px">
        <q-btn @click="selectedCategory = index" flat dense no-caps>
          {{ item?.title }}
        </q-btn>
      </div>
    </div> -->
    <div class="row justify-start custom-container">
      <div
        v-for="(item, index) in videoCourseData"
        :key="index"
        class="custom-card col-12 col-sm-6 col-md-4 col-lg-3 q-px-md"
      >
        <div @click="handleDetail(item)" style="cursor: pointer">
          <q-img
            no-spinner
            class="custom-card-image"
            alt="card-img"
            :src="item?.imageUrl"
          />
          <div class="row justify-between q-mt-sm q-px-sm">
            <p class="custom-card-title self-center" style="max-width: 60%">
              {{ item?.title }}
            </p>
            <p class="custom-card-description">{{ item?.duration }} read</p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
// import CustomTextInput from 'src/components/common/CustomTextInput.vue'
import { useCourseStore } from 'src/stores/Course'
import { useGlobalStore } from 'src/stores/Global'

export default {
  name: 'VideoCoursePage',
  // components: { CustomTextInput },
  data () {
    return {
      searchModel: '',
      selectedCategory: 0,
      categories: []
    }
  },
  mounted () {
    if (!this.videoCourseData || this.videoCourseData?.length === 0) {
      this.getVideoCourse()
    }
  },
  computed: {
    url () {
      return window.location.href.split('#')[0]
    },
    isXSmallScreen () {
      return this.$q.screen.width <= 350
    },
    isSmallScreen () {
      return this.$q.screen.width <= 500
    },
    isMediumScreen () {
      return this.$q.screen.width <= 750
    },
    courseStore () {
      return useCourseStore()
    },
    videoCourseData () {
      return this.courseStore.videoCourse
    },
    authStore () {
      return useAuthStore()
    },
    globalStore () {
      return useGlobalStore()
    }
  },
  methods: {
    getVideoCourse () {
      return new Promise((resolve, reject) => {
        this.globalStore.SET_DATA({ key: 'isLoading', data: true })
        this.courseStore
          .getVideoCourse()
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
          .finally(() => {
            this.globalStore.SET_DATA({ key: 'isLoading', data: false })
          })
      })
    },
    handleDetail (item) {
      const payload = {
        key: 'selectedVideoCourse',
        data: item
      }
      this.courseStore.SET_DATA(payload)
      this.$router.push({ name: 'VideoCourseDetailPage' })
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-page {
  overflow-x: hidden;
  padding: 20px 10px;
  @media (min-width: 500px) {
    padding: 50px 20px !important;
  }
}
.custom-title {
  font-weight: 700;
  font-size: 20px;
  color: #222831;
  @media (min-width: 500px) {
    font-size: 30px !important;
  }
}
.custom-container {
  margin-top: 50px;
  padding: 0px 10px;
  @media (min-width: 500px) {
    padding: 0px 50px !important;
  }
}
.custom-card {
  margin-bottom: 10px;
  @media (min-width: 500px) {
    margin-bottom: 20px !important;
  }
}
.custom-card-image {
  border-radius: 10px;
  width: 100%;
  height: 150px;
}
.custom-card-title {
  font-weight: 400;
  font-size: 14px;
  color: #222831;
  @media (min-width: 500px) {
    font-size: 16px !important;
  }
}
.custom-card-description {
  font-weight: 400;
  font-size: 10px;
  color: #a5a5a5;
  @media (min-width: 500px) {
    font-size: 12px !important;
  }
}
</style>
