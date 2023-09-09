<template>
  <div class="terms-of-use">
    <div class="container">
      <h1>Пользовательское соглашение</h1>

      <Preloader/>
      <p class="terms-of-use__text">Текстовый блок</p>
    </div>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader.vue";

export default {
  name: "TermsOfUse",
  components: {Preloader}
}
</script>

<style scoped lang="scss">
.terms-of-use {
  padding-bottom: 50px;

  &__text {
    font-size: 18px;

    &_mt-20 {
      margin-top: 20px;
    }
  }
}
</style>