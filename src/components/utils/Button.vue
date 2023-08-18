<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Button",
  props: {
    type: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'Кнопка'
    },
    bg: {
      type: String,
      default: 'green'
      //green, orange, white, white2
    },
    br: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: 'fit-content'
    },
    padding: {
      type: String,
      default: '11px 16px'
    },
    fontSize: {
      type: String,
      default: '14px'
    }
  }
})
</script>

<template>
  <button
      class="button"
      :type="type"
      :class="bg"
      :style="`max-width: ${width}; padding: ${padding}; border-radius: ${br}; font-size: ${fontSize};`"
      @click.prevent="$emit('click')"
  >{{ name }}</button>
</template>

<style scoped lang="scss">
@import "@/assets/scss/components/utils/button";
</style>