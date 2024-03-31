<template>
  <router-view />
  <CustomLoading />
</template>

<script>
import { defineComponent } from 'vue'
import CustomLoading from './components/CustomLoading.vue'

export default defineComponent({
  name: 'App',
  components: { CustomLoading }
})
</script>
