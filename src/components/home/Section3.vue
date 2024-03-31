<template>
  <div class="custom-container">
    <div class="text-center row justify-center">
      <p class="custom-title">
        we also provide materials in the form of videos
      </p>
    </div>
    <div class="text-center row justify-center">
      <p class="custom-description">
        the video material gives you a more detailed explanation so you feel
        comfortable learning.
      </p>
    </div>
    <div class="row justify-center">
      <q-btn
        flat
        dense
        no-caps
        class="custom-btn"
        @click="$router.push('/video-course')"
      >
        Get Started
      </q-btn>
    </div>
    <div class="row justify-center q-pa-md q-mt-xl">
      <iframe
        style="border-radius: 4px; aspect-ratio: 16/9"
        type="text/html"
        :width="isSmallScreen ? '100%' : '600'"
        src="https://www.youtube.com/embed/YT08A8Jucj0"
        frameborder="0"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section3Component',
  computed: {
    isXSmallScreen () {
      return this.$q.screen.width <= 350
    },
    isSmallScreen () {
      return this.$q.screen.width <= 500
    },
    isMediumScreen () {
      return this.$q.screen.width <= 750
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-container {
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
}
.custom-title {
  font-size: 30px;
  font-weight: 700;
  color: #222831;
  line-height: normal;
  padding: 0px 10px;
  @media (min-width: 500px) {
    width: 700px;
  }
  @media (min-width: 750px) {
    font-size: 40px !important;
  }
  @media (min-width: 1000px) {
    font-size: 50px !important;
  }
}
.custom-description {
  font-size: 14px;
  font-weight: 400;
  color: #bcbcbc;
  line-height: normal;
  padding: 0px 20px;
  @media (min-width: 500px) {
    width: 500px;
  }
  @media (min-width: 750px) {
    font-size: 18px !important;
    margin-top: 10px;
  }
  @media (min-width: 1000px) {
    font-size: 20px !important;
    margin-top: 20px;
  }
}
.custom-btn {
  color: #000000;
  background-color: #bcbcbc;
  width: 120px;
  height: 30px;
  border-radius: 4px;
  margin-top: 10px;
  @media (min-width: 500px) {
    height: 40px !important;
    width: 150px !important;
    margin-top: 20px !important;
  }
}
</style>
