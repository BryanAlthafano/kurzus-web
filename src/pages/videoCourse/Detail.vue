<template>
  <q-page class="custom-page">
    <div>
      <q-breadcrumbs class="text-black">
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" color="black" />
        </template>

        <q-breadcrumbs-el label="Video Course" class="text-black" />
        <q-breadcrumbs-el label="Detail Video Course" class="text-black" />
      </q-breadcrumbs>
    </div>
    <div class="custom-container">
      <div class="row justify-center">
        <iframe
          style="border-radius: 4px; width: 100%; aspect-ratio: 16/9"
          type="text/html"
          :src="getSelectedVideoCourse?.videoUrl"
          frameborder="0"
        />
      </div>
      <div class="q-mt-sm">
        <p class="custom-title">{{ getSelectedVideoCourse?.title }}</p>
      </div>
      <div class="q-mt-sm custom-content">
        <div v-html="getSelectedVideoCourse?.content"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useCourseStore } from 'src/stores/Course'

export default {
  name: 'CourseDetailPage',
  data () {
    return {
      isLoading: false
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
    getSelectedVideoCourse () {
      return this.courseStore.getSelectedVideoCourse
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.custom-page {
  overflow-x: hidden;
  padding: 20px 10px;
  @media (min-width: 500px) {
    padding: 20px 40px !important;
  }
}
.custom-container {
  margin-top: 10px;
  padding: 10px;
  @media (min-width: 500px) {
    padding: 20px !important;
  }
}
.custom-title {
  font-weight: 500;
  font-size: 20px;
  color: #222831;
  @media (min-width: 500px) {
    font-size: 30px !important;
  }
}
.custom-content {
  background-color: #5b5b5b;
  padding: 4px;
  border-radius: 10px;
  @media (min-width: 500px) {
    padding: 20px;
  }
}
.custom-content ::v-deep .custom-content-title {
  font-weight: 500;
  color: #ffffff;
  font-size: 18px;
  @media (min-width: 500px) {
    font-size: 22px !important;
  }
}
.custom-content ::v-deep .custom-content-description {
  font-weight: 400;
  color: #ffffff;
  font-size: 14px;
  text-align: justify;
  @media (min-width: 500px) {
    font-size: 16px !important;
  }
}
</style>
