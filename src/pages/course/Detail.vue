<template>
  <q-page class="custom-page">
    <div class="custom-header">
      <q-img
        no-spinner
        alt="header-course"
        :src="getSelectedCourse?.imageUrl"
        :style="`width: 100%; height: ${
          isSmallScreen ? '200px' : isMediumScreen ? '300px' : '400px'
        }`"
      >
        <div class="custom-header-container column justify-between">
          <div class="custom-header-content">
            <q-breadcrumbs class="text-black">
              <template v-slot:separator>
                <q-icon size="1.5em" name="chevron_right" color="black" />
              </template>

              <q-breadcrumbs-el label="Course" class="text-black" />
              <q-breadcrumbs-el label="Detail Course" class="text-black" />
            </q-breadcrumbs>
            <div class="q-mt-sm">
              <p>{{ getSelectedCourse?.title }}</p>
            </div>
          </div>
          <div
            class="custom-header-effect"
            :style="`height: ${
              isSmallScreen ? '100px' : isMediumScreen ? '150px' : '200px'
            }`"
          ></div>
        </div>
      </q-img>
    </div>
    <div class="custom-content">
      <div v-html="getSelectedCourse?.content"></div>
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
    getSelectedCourse () {
      return this.courseStore.getSelectedCourse
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.custom-page {
  overflow-x: hidden;
}
.custom-header {
  width: 100%;
}
.custom-header-container {
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 0px;
}
.custom-header-content {
  padding: 10px 20px;
  @media (min-width: 500px) {
    padding: 20px 50px !important;
  }
}
.custom-content {
  padding: 20px 10px;
  @media (min-width: 500px) {
    padding: 30px 50px !important;
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
.custom-content ::v-deep .custom-content-title {
  font-weight: 500;
  color: #222831;
  font-size: 22px;
  @media (min-width: 500px) {
    font-size: 26px !important;
  }
}
.custom-content ::v-deep .custom-content-description {
  font-weight: 400;
  color: #535353;
  font-size: 16px;
  text-align: justify;
  @media (min-width: 500px) {
    font-size: 20px !important;
  }
}
.custom-header-effect {
  width: 100%;
  background: linear-gradient(to bottom, rgb(255, 255, 255, 0), #ffffff);
}
</style>
