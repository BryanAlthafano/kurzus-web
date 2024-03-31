<template>
  <div class="custom-container" v-if="quizData?.length">
    <div class="text-center row justify-center">
      <p class="custom-title">Q&A</p>
    </div>
    <div class="testi-container row justify-between">
      <div
        class="custom-card"
        :style="
          isSmallScreen
            ? 'width: 49%'
            : isMediumScreen
            ? 'width: 49%'
            : 'width: 24%'
        "
        v-for="(item, index) in quizData"
        :key="index"
      >
        <p class="custom-card-title">{{ item?.question }}</p>
        <p class="custom-card-description">{{ item?.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from 'src/stores/Global'

export default {
  name: 'Section5Component',
  mounted () {
    if (!this.quizData || this.quizData?.length === 0) {
      this.getQuiz()
    }
  },
  computed: {
    isXSmallScreen () {
      return this.$q.screen.width <= 350
    },
    isSmallScreen () {
      return this.$q.screen.width <= 500
    },
    isMediumScreen () {
      return this.$q.screen.width <= 750
    },
    globalStore () {
      return useGlobalStore()
    },
    quizData () {
      return this.globalStore.quiz
    }
  },
  methods: {
    getQuiz () {
      return new Promise((resolve, reject) => {
        this.globalStore
          .getQuiz()
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
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
.testi-container {
  background-color: #fcfcfc;
  border-radius: 20px;
  padding: 20px;
  @media (min-width: 500px) {
    padding: 50px 80px !important;
  }
}
.custom-card {
  min-height: 100px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 10px;
  border: solid 1px #000000;
  @media (min-width: 500px) {
    padding: 20px !important;
  }
}
.custom-card-title {
  font-size: 16px;
  font-weight: 700;
  color: #222831;
  line-height: normal;
  @media (min-width: 500px) {
    font-size: 18px !important;
  }
}
.custom-card-description {
  font-size: 12px;
  font-weight: 400;
  color: #7d7d7d;
  line-height: normal;
  margin-top: 10px;
  @media (min-width: 500px) {
    font-size: 14px !important;
  }
}
</style>
