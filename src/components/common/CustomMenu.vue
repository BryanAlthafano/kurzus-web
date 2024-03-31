<template>
  <q-btn dense no-caps flat class="custom-button">
    <div v-if="type === 'normal'" class="row" style="gap: 4px">
      <p v-if="label" class="q-ma-none self-center custom-label">
        {{ label }}:
      </p>
      <p class="q-ma-none self-center custom-title">{{ modelValue }}</p>
      <q-icon
        class="self-center"
        :name="isShowMenu ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        size="xs"
      />
    </div>
    <div
      v-else-if="type === 'account'"
      class="row self-center"
      style="gap: 4px"
    >
      <q-avatar
        :size="isSmallScreen ? 'sm' : 'md'"
        :font-size="isSmallScreen ? '12px' : '14px'"
        text-color="white"
        color="green"
        style="text-transform: uppercase"
      >
        {{ label }}
      </q-avatar>
      <q-icon
        class="self-center"
        :name="isShowMenu ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        size="xs"
      />
    </div>
    <q-menu
      :offset="[-10, 0]"
      transition-show="jump-down"
      transition-hide="jump-up"
      v-model="isShowMenu"
    >
      <q-list separator dense style="min-width: 120px">
        <q-item
          v-for="(item, index) in items"
          :key="index"
          clickable
          @click="handleMenu(item)"
        >
          <q-item-section
            avatar
            v-if="item.icon"
            style="min-width: 10px"
            class="q-pa-none"
          >
            <q-icon color="grey" class="q-mr-sm" :name="item.icon" size="sm" />
          </q-item-section>
          <q-item-section style="min-width: 100px">
            {{ item.title }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: () => ''
    },
    label: {
      type: String,
      default: () => ''
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    items: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: () => 'normal'
    }
  },
  data () {
    return {
      isShowMenu: false
    }
  },
  computed: {
    isSmallScreen () {
      return this.$q.screen.width <= 500
    }
  },
  methods: {
    handleMenu (item) {
      this.$emit('update:modelValue', item)
      this.isShowMenu = !this.isShowMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-button {
  background-color: #ffffff;
  border-radius: 8px;
  height: 100%;
  @media (max-width: 500px) {
    padding: 2px 4px;
  }
  @media (min-width: 500px) {
    padding: 4px 8px;
  }
}
.custom-label {
  font-weight: 400;
  color: #64668b;
  margin-right: 2px;
  @media (max-width: 500px) {
    font-size: 10px;
  }
  @media (min-width: 500px) {
    font-size: 12px;
  }
}
.custom-title {
  font-weight: 400;
  color: #010840;
  @media (max-width: 500px) {
    font-size: 12px;
  }
  @media (min-width: 500px) {
    font-size: 14px;
  }
}
</style>
