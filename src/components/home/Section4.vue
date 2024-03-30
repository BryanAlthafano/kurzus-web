<template>
  <div class="custom-container">
    <div class="text-center row justify-center">
      <p class="custom-title">Testimony</p>
    </div>
    <div class="testi-container row justify-between">
      <div
        class="custom-card"
        :style="
          isSmallScreen
            ? 'width: 100%'
            : isMediumScreen
            ? 'width: 49%'
            : 'width: 32%'
        "
        v-for="(item, index) in testiList"
        :key="index"
      >
        <p class="custom-card-title">{{ item?.name }}</p>
        <div class="q-py-xs">
          <div class="custom-decoration"></div>
        </div>
        <p class="custom-card-description">{{ item?.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section4Component',
  data () {
    return {
      testiList: [
        {
          name: 'Robert alfonso',
          message:
            'Lorem ipsum dolor sit amet consectetur. Elementum volutpat ipsum nibh erat nisi.Quam lorem nisl augue leo ut ut pretium sagittis viverra. Mattis augue quisquesagittis nascetur aliquam. Dolor cursus urna mauris id.'
        },
        {
          name: 'Anthony',
          message:
            'Lorem ipsum dolor sit amet consectetur. Elementum volutpat ipsum nibh erat nisi.Quam lorem nisl augue leo ut ut pretium sagittis viverra. Mattis augue quisquesagittis nascetur aliquam. Dolor cursus urna mauris id.'
        },
        {
          name: 'Malabar yaisi',
          message:
            'Lorem ipsum dolor sit amet consectetur. Elementum volutpat ipsum nibh erat nisi.Quam lorem nisl augue leo ut ut pretium sagittis viverra. Mattis augue quisquesagittis nascetur aliquam. Dolor cursus urna mauris id.'
        }
      ]
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
  min-height: 200px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 10px;
  border: solid 1px #8d7474;
  @media (min-width: 500px) {
    padding: 20px !important;
    min-height: 400px;
  }
}
.custom-card-title {
  font-size: 16px;
  font-weight: 700;
  color: #222831;
  line-height: normal;
  @media (min-width: 500px) {
    font-size: 20px !important;
  }
}
.custom-card-description {
  font-size: 13px;
  font-weight: 500;
  color: #7d7d7d;
  line-height: normal;
  margin-top: 10px;
  @media (min-width: 500px) {
    font-size: 16px !important;
  }
}
.custom-decoration {
  display: block;
  width: 50px;
  height: 5px;
  background-color: #ffbe98;
}
</style>
