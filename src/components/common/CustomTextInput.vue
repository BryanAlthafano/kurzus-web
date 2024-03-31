<template>
  <div class="custom-input">
    <q-input
      :modelValue="modelValue"
      :placeholder="placeholder"
      @update:modelValue="emitEvent"
      :rules="rules"
      :readonly="readonly"
      :disable="disable"
      :type="type"
      :autocomplete="'off'"
      :dense="dense"
      style="color: #64668b"
      :color="color"
      :error-message="errorMessage"
      :maxlength="maxLength"
      :hint="hint"
      :counter="counter"
      :style="customStyle"
      :class="customClass"
      :rows="rows"
      :autogrow="autogrow"
      :input-style="inputStyle"
      :prefix="prefix"
      :rounded="rounded"
      :outlined="outlined"
    >
      <template v-if="prependIconName !== ''" v-slot:prepend>
        <q-avatar v-if="prependIconName === 'searchIcon'">
          <q-img src="/icons/search-icon.png" style="width: 16px" no-spinner />
        </q-avatar>
        <slot name="prepend-icon">
          <q-icon
            :name="prependIconName"
            tag="icon"
            size="large"
            color="grey"
            @click="$emit('click:prepend')"
          />
        </slot>
      </template>
      <template v-if="appendIconName !== ''" v-slot:append>
        <q-avatar>
          <slot name="append-icon">
            <q-icon
              :name="appendIconName"
              tag="icon"
              size="large"
              color="grey"
              @click="$emit('click:append')"
            />
          </slot>
        </q-avatar>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: () => ''
    },
    placeholder: {
      type: String,
      default: () => ' '
    },
    rules: {
      type: Array,
      default: () => []
    },
    readonly: {
      type: Boolean,
      default: () => false
    },
    disable: {
      type: Boolean,
      default: () => false
    },
    type: {
      type: String,
      default: () => 'text'
    },
    dense: {
      type: Boolean,
      default: () => true
    },
    prependIconName: {
      type: String,
      default: () => ''
    },
    appendIconName: {
      type: String,
      default: () => ''
    },
    color: {
      type: String,
      default: () => 'blue'
    },
    errorMessage: {
      type: String,
      default: () => ''
    },
    maxLength: {
      type: Number
    },
    hint: {
      type: String,
      default: () => ''
    },
    counter: {
      type: Boolean,
      default: () => false
    },
    customStyle: {
      type: String,
      default: () => ''
    },
    customClass: {
      type: String,
      default: () => ''
    },
    rows: {
      type: Number,
      default: () => 1
    },
    autogrow: {
      type: Boolean,
      default: () => false
    },
    inputStyle: {
      type: String,
      default: () => ''
    },
    prefix: {
      type: String,
      default: () => ''
    },
    rounded: {
      type: Boolean,
      default: () => false
    },
    outlined: {
      type: Boolean,
      default: () => true
    }
  },
  computed: {
    url () {
      return window.location.href.split('#')[0]
    }
  },
  methods: {
    emitEvent (val) {
      this.$emit('update:modelValue', val)
    }
  }
}
</script>

<style lang="scss">
.custom-input .q-field--outlined .q-field__control {
  border-radius: 10px;
}
.custom-input .q-field__label {
  margin-left: 5px;
}
.custom-input .q-field__native {
  margin-left: 5px;
}
.custom-input .q-field__messages {
  white-space: pre-line;
  line-height: 15px;
}
.custom-input .q-field__bottom--animated {
  transform: none;
  position: relative;
}
.custom-input .q-field--with-bottom {
  padding: 0px !important;
}
</style>
