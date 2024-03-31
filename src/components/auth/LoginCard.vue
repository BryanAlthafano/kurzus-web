<template>
  <q-form ref="form" class="custom-card" @submit="handleLogin">
    <p class="custom-card-title">
      Please enter your email and password to enter the website.
    </p>
    <div class="q-mt-lg column" style="gap: 2px">
      <CustomTextInput
        :name="'email'"
        :modelValue="formData.email"
        :placeholder="'Email'"
        :rules="[v => !!v || 'Required']"
        @update:modelValue="val => handleFormValue('email', val)"
        :disable="isLoading"
      />
      <CustomTextInput
        :name="'password'"
        :modelValue="formData.password"
        :placeholder="'Password'"
        :rules="[v => !!v || 'Required']"
        @update:modelValue="val => handleFormValue('password', val)"
        :disable="isLoading"
        :type="isVisible ? 'text' : 'password'"
        :appendIconName="isVisible ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="isVisible = !isVisible"
      />
    </div>
    <div class="q-mt-lg">
      <q-btn type="submit" flat no-caps dense class="custom-btn">Sign In</q-btn>
    </div>
    <div class="q-mt-lg">
      <p class="custom-description">
        If you don't have an account then you can create an account
        <span>
          <RouterLink to="/register" class="custom-link">here</RouterLink>.
        </span>
      </p>
    </div>
  </q-form>
</template>

<script>
import CustomTextInput from 'src/components/common/CustomTextInput.vue'
import { useAuthStore } from 'src/stores/Auth'
import { useGlobalStore } from 'src/stores/Global'

export default {
  name: 'LoginCard',
  components: { CustomTextInput },
  data () {
    return {
      isLoading: false,
      isVisible: false,
      formData: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    authStore () {
      return useAuthStore()
    },
    globalStore () {
      return useGlobalStore()
    }
  },
  methods: {
    handleFormValue (key, data) {
      this.formData[key] = data
    },
    handleLogin () {
      return new Promise((resolve, reject) => {
        const payload = { ...this.formData }
        this.globalStore.SET_DATA({ key: 'isLoading', data: true })
        this.isLoading = true
        this.authStore
          .doLogin(payload)
          .then(result => {
            this.$q.notify({
              position: 'top-right',
              message: 'Login successful'
            })
            this.$router.replace('/')
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
          .finally(() => {
            this.globalStore.SET_DATA({ key: 'isLoading', data: false })
            this.isLoading = false
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-card {
  max-width: 500px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px 15px;
  box-shadow: 0px 4px 30px 0px rgba(74, 87, 195, 0.1);
  @media (min-width: 500px) {
    padding: 30px;
  }
  .custom-card-title {
    margin: 0px;
    text-align: justify;
    line-height: normal;
    font-weight: 400;
    color: #222831;
    font-size: 16px;
    @media (min-width: 500px) {
      font-size: 22px;
    }
  }
}
.custom-normal-text {
  margin: 0px;
  line-height: normal;
  font-weight: 400;
  color: #222831;
  font-size: 14px;
  @media (min-width: 500px) {
    font-size: 16px;
  }
}
.custom-btn {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: #2192ff;
  font-weight: 500;
  color: #ffffff;
  font-size: 17px;
}
.custom-description {
  text-align: justify;
  margin: 0px;
  line-height: normal;
  font-weight: 400;
  color: #bcbcbc;
  font-size: 14px;
  @media (min-width: 500px) {
    font-size: 15px;
  }
}
.custom-link {
  color: #222831;
  text-decoration: none;
}
</style>
