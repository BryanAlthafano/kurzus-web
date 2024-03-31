<template>
  <q-page class="custom-page">
    <div class="custom-decoration">
      <q-img
        no-spinner
        alt="auth_decoration_img"
        :src="url + 'images/auth_decoration.png'"
        style="height: 100vh; position: fixed"
      />
    </div>
    <div class="custom-container column justify-between">
      <div class="custom-header-container">
        <q-breadcrumbs class="text-white">
          <template v-slot:separator>
            <q-icon size="1.5em" name="chevron_right" style="color: #d9d9d9" />
          </template>
          <q-breadcrumbs-el label="Home" class="text-white" />
          <q-breadcrumbs-el label="Sign In" style="color: #d9d9d9" />
        </q-breadcrumbs>
        <div class="q-mt-md">
          <p class="custom-header-title q-ma-none">Sign In</p>
          <div
            class="q-mt-sm"
            :style="`background-color: #ffffff; width: ${
              isSmallScreen ? '50px' : '70px'
            }; 
            height: ${isSmallScreen ? '2px' : '4px'}`"
          ></div>
        </div>
      </div>
      <div class="row justify-center">
        <LoginCard />
      </div>
      <div></div>
    </div>
  </q-page>
</template>

<script>
import LoginCard from 'src/components/auth/LoginCard.vue'

export default {
  name: 'LoginPage',
  components: { LoginCard },
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
.custom-decoration {
  position: relative;
  overflow: hidden;
}
.custom-container {
  position: relative;
  min-height: 100vh;
  z-index: 5;
  padding: 10px 20px;
  @media (min-width: 500px) {
    padding: 20px 50px !important;
  }
}
.custom-header-title {
  font-weight: 700;
  font-size: 26px;
  color: #ffffff;
  @media (min-width: 500px) {
    font-size: 36px !important;
  }
}
.custom-content-container {
  height: 100%;
}
</style>
