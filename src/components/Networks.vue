<template>
  <FacebookIcon/>
  <InstagramIcon/>
  <VKIcon/>
  <TwitterIcon/>
</template>

<script>
import FacebookIcon from "@/components/icons/networks/FacebookIcon.vue";
import InstagramIcon from "@/components/icons/networks/InstagramIcon.vue";
import VKIcon from "@/components/icons/networks/VKIcon.vue";
import TwitterIcon from "@/components/icons/networks/TwitterIcon.vue";

export default {
  name: "Networks",
  components: {TwitterIcon, VKIcon, InstagramIcon, FacebookIcon}
}
</script>

<style scoped lang="scss">

</style>