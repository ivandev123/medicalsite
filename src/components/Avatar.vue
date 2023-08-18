<template>
  <div class="avatar">
    <img alt="avatar" :src="avatar">
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    avatar: {
      type: String,
      default: '@/assets/images/home/reviews/avatar.png'
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/avatar";
</style>