<template>
  <button
      class="button2"
      :style="`max-width: ${maxWidth}; padding: ${padding};`"
  >{{ name }}</button>
</template>

<script>
export default {
  name: "Button2",
  props: {
    name: {
      type: String,
      default: 'Кнопка'
    },
    maxWidth: {
      type: String,
      default: 'fit-content'
    },
    padding: {
      type: String,
      default: '10px 16px'
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/utils/button2";
</style>