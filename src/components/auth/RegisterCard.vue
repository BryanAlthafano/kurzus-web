<template>
  <q-form ref="form" class="custom-card" @submit="handleRegister">
    <p class="custom-card-title">
      Complete the data below to create your new account.
    </p>
    <div class="q-mt-lg column" style="gap: 2px">
      <CustomTextInput
        :name="'email'"
        :modelValue="formData.email"
        :placeholder="'Input email'"
        :rules="[v => !!v || 'Required']"
        @update:modelValue="val => handleFormValue('email', val)"
        :disable="isLoading"
      />
      <CustomTextInput
        :name="'username'"
        :modelValue="formData.username"
        :placeholder="'Input username'"
        :rules="[v => !!v || 'Required']"
        @update:modelValue="val => handleFormValue('username', val)"
        :disable="isLoading"
      />
      <CustomTextInput
        :name="'password'"
        :modelValue="formData.password"
        :placeholder="'Input password'"
        :type="'password'"
        :rules="[v => !!v || 'Required']"
        @update:modelValue="val => handleFormValue('password', val)"
        :disable="isLoading"
      />
      <CustomTextInput
        :name="'confirm_password'"
        :modelValue="formData.confirm_password"
        :placeholder="'Repeat password'"
        :type="'password'"
        :rules="[
          v => !!v || 'Required',
          v => v === formData.password || 'Password not match'
        ]"
        @update:modelValue="val => handleFormValue('confirm_password', val)"
        :disable="isLoading"
      />
    </div>
    <div class="q-mt-md">
      <q-btn type="submit" flat no-caps dense class="custom-btn">Sign Up</q-btn>
    </div>
    <div class="q-mt-lg">
      <p class="custom-description">
        If you already have an account, you can create one
        <span>
          <RouterLink to="/login" class="custom-link">here</RouterLink>.
        </span>
      </p>
    </div>
  </q-form>
</template>

<script>
import CustomTextInput from 'src/components/common/CustomTextInput.vue'
export default {
  name: 'LoginCard',
  components: { CustomTextInput },
  data () {
    return {
      isLoading: false,
      formData: {
        email: '',
        username: '',
        password: '',
        confirm_password: ''
      }
    }
  },
  methods: {
    handleFormValue (key, data) {
      this.formData[key] = data
    },
    handleRegister () {
      console.log('register')
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
