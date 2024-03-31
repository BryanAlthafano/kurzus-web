<template>
  <div class="custom-container">
    <q-dialog :model-value="isLoading" persistent>
      <q-card class="custom-card">
        <q-spinner-pie color="orange" size="5em" />
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { useGlobalStore } from 'src/stores/Global'

export default {
  name: 'CustomLoading',
  computed: {
    globalStore () {
      return useGlobalStore()
    },
    isLoading () {
      return this.globalStore.getIsLoading
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-card {
  background-color: transparent;
  box-shadow: none;
}
</style>
