<template>
  <div class="privacy-policy">
    <div class="container">
      <h1>Политика конфиденциальности</h1>

      <Preloader/>
      <p class="privacy-policy__text">Текстовый блок</p>
    </div>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader.vue";

export default {
  name: "PrivacyPolicy",
  components: {Preloader}
}
</script>

<style scoped lang="scss">
.privacy-policy {
  padding-bottom: 50px;

  &__text {
    font-size: 18px;

    &_mt-20 {
      margin-top: 20px;
    }
  }
}
</style>