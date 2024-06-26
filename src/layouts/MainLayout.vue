<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="custom-header" elevated>
      <q-toolbar class="row justify-between">
        <div class="col row">
          <div v-if="isSmallScreen">
            <q-btn
              flat
              dense
              round
              icon="mdi-menu"
              style="color: #000000"
              @click="isOpenDrawer = !isOpenDrawer"
            />
          </div>
          <div v-else class="row self-center" style="gap: 12px">
            <RouterLink
              class="custom-button"
              :style="`color: ${
                $route.name === 'HomePage' ? '#8D7474' : '#222831'
              }`"
              to="/"
            >
              Home
            </RouterLink>
            <RouterLink
              class="custom-button"
              :style="`color: ${
                $route.name === 'CoursePage' ? '#8D7474' : '#222831'
              }`"
              to="/course"
            >
              Course
            </RouterLink>
            <RouterLink
              class="custom-button"
              :style="`color: ${
                $route.name === 'VideoCoursePage' ? '#8D7474' : '#222831'
              }`"
              to="/video-course"
            >
              Video Course
            </RouterLink>
          </div>
        </div>
        <div class="col row justify-center self-center">
          <q-img
            @click="$router.replace('/')"
            no-spinner
            :src="`${url}icons/logokurzus.png`"
            alt="logokurzus"
            style="width: 40px; cursor: pointer"
          />
        </div>
        <div class="col row justify-end self-center">
          <div v-if="isLoggedIn">
            <!-- <div class="custom-profile" style="cursor: pointer">
              <p class="q-ma-none self-center">{{ getUserData?.username }}</p>
            </div> -->
            <CustomMenu
              :type="'account'"
              :label="getUserData?.username[0]"
              :items="[{ title: 'Logout', icon: 'mdi-logout', key: 'logout' }]"
              @update:modelValue="val => handleAccount(val.key)"
            />
          </div>
          <div class="row self-center" style="gap: 12px" v-else>
            <q-btn
              rounded
              flat
              dense
              no-caps
              class="custom-sign-in-btn"
              @click="$router.push('/login')"
            >
              Sign In
            </q-btn>
            <q-btn
              v-if="!isSmallScreen"
              rounded
              flat
              dense
              no-caps
              class="custom-sign-up-btn"
              @click="$router.push('/register')"
            >
              Sign Up
            </q-btn>
          </div>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      mini
      v-model="isOpenDrawer"
      :width="200"
      :breakpoint="500"
      elevated
      class="bg-white"
    >
      <div class="q-pa-sm column">
        <RouterLink
          class="custom-button"
          :style="`color: ${
            $route.name === 'HomePage' ? '#8D7474' : '#222831'
          }`"
          to="/"
        >
          Home
        </RouterLink>
        <RouterLink
          class="custom-button"
          :style="`color: ${
            $route.name === 'CoursePage' ? '#8D7474' : '#222831'
          }`"
          to="/course"
        >
          Course
        </RouterLink>
        <RouterLink
          class="custom-button"
          :style="`color: ${
            $route.name === 'VideoCoursePage' ? '#8D7474' : '#222831'
          }`"
          to="/video-course"
        >
          Video Course
        </RouterLink>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import CustomMenu from 'src/components/common/CustomMenu.vue'
import { useAuthStore } from 'src/stores/Auth'

export default {
  name: 'MainLayout',
  components: { CustomMenu },
  data () {
    return {
      isOpenDrawer: false
    }
  },
  computed: {
    url () {
      return window.location.href.split('#')[0]
    },
    authStore () {
      return useAuthStore()
    },
    isLoggedIn () {
      return this.authStore.isLoggedIn
    },
    getUserData () {
      return this.authStore.getUserData
    },
    isSmallScreen () {
      return this.$q.screen.width <= 500
    }
  },
  methods: {
    handleAccount (key) {
      if (key === 'logout') {
        this.authStore.CLEAR_DATA()
        this.$router.replace('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-header {
  background-color: #ffffff;
  padding: 4px 6px;
  @media (min-width: 500px) {
    padding: 4px 16px !important;
  }
}
.custom-button {
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  @media (min-width: 500px) {
    font-size: 16px !important;
  }
  padding: 2px 4px;
  border-radius: 4px;
}
.custom-button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.custom-sign-in-btn {
  background-color: #8d7474;
  width: 80px;
  height: 25px;
  padding: 0px;
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  @media (min-width: 500px) {
    font-size: 14px !important;
  }
}
.custom-sign-up-btn {
  background-color: transparent;
  width: 80px;
  height: 25px;
  padding: 0px;
  font-size: 12px;
  font-weight: 500;
  color: #8d7474;
  @media (min-width: 500px) {
    font-size: 14px !important;
  }
}
.custom-profile {
  background-color: #8d7474;
  height: 25px;
  padding: 0px 20px;
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  @media (min-width: 500px) {
    font-size: 14px !important;
  }
  display: flex;
  flex-direction: row;
  border-radius: 999px;
}
</style>
