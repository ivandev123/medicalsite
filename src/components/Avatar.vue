<template>
  <div class="avatar">
    <img alt="avatar" :src="require('@/assets' + avatar)">
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    avatar: {
      type: String,
      default: '/images/avatar.jpg'
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/avatar";
</style>