<template>
  <div class="input">
    <div class="input__title" v-if="title">{{ title }}</div>

    <div class="input__body">
      <input
          type="text"
          :style="`height: ${height}; border-radius: ${br}; padding: ${padding};`"
          :placeholder="placeholder"
          v-model="inputValue"
          @input="$emit('set-value', inputValue)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: ['title', 'placeholder', 'height', 'br', 'padding', 'defaultValue'],
  data() {
    return {
      inputValue: ''
    }
  },
  watch: {
    defaultValue() {
      this.inputValue = this.defaultValue
    }
  },
  mounted() {
    this.inputValue = this.defaultValue
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/utils/input";
</style>