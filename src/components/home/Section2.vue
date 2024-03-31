<template>
  <div :class="`${isSmallScreen ? 'column' : 'row justify-between'}`">
    <div :class="`custom-leftside ${isSmallScreen ? 'col-12' : 'col-6'}`">
      <div class="self-center">
        <p class="custom-title">We provide easy-to-understand text material</p>
        <p class="custom-description">
          The materials are available in various categories. You can choose the
          materials you like.
        </p>
        <div>
          <q-btn
            flat
            dense
            no-caps
            class="custom-btn"
            @click="$router.push('/course')"
          >
            Get Started
          </q-btn>
        </div>
      </div>
    </div>
    <div :class="`custom-rightside ${isSmallScreen ? 'col-12' : 'col-6'}`">
      <q-img
        no-spinner
        alt="sectiontwo"
        :src="`${url}images/section_2.png`"
        :style="`width: ${
          isSmallScreen ? '300px' : isMediumScreen ? '270px' : '600px'
        }`"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section2Component',
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
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-leftside {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 30px 0px 30px;
  @media (min-width: 750px) {
    padding: 50px 0px 50px 50px !important;
  }
  @media (min-width: 1000px) {
    padding: 70px 0px 70px 70px !important;
  }
}
.custom-rightside {
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 20px;
  padding: 20px;
  @media (min-width: 500px) {
    padding: 50px !important;
  }
}
.custom-title {
  font-size: 30px;
  font-weight: 700;
  color: #222831;
  line-height: normal;
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
  @media (min-width: 500px) {
    height: 40px !important;
    width: 150px !important;
    margin-top: 20px !important;
  }
}
</style>
