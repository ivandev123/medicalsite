<template>
  <div class="privacy-policy">
    <div class="container">
      <h1>Политика конфиденциальности</h1>

      <p class="privacy-policy__text">Текстовый блок</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrivacyPolicy"
}
</script>

<style scoped lang="scss">
.privacy-policy {
  &__text {
    font-size: 18px;

    &_mt-20 {
      margin-top: 20px;
    }
  }
}
</style>