<template>
  <textarea class="my-textarea" v-model="text" @input="$emit('set-value', text)"/>
</template>

<script>
export default {
  name: "MyTextarea",
  emits: ['set-value'],
  props: ['defaultValue'],
  data() {
    return {
      text: '',
    }
  },
  watch: {
    defaultValue() {
      this.text = this.defaultValue
    }
  },
  mounted() {
    this.text = this.defaultValue
  }
}
</script>

<style scoped lang="scss">
.my-textarea {
  padding: 15px 25px;
  width: 100%;
  height: 100px;
  border-radius: 12px;
  background: #FFFFFF;
  border: 1px solid #DFDFDF;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #262626;

  &::placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #9DA0AF;
  }

  &:focus {
    border: 1px solid #24C8BC;
    transition: .25s;
  }
}
</style>