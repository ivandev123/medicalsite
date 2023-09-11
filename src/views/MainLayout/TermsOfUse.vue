<template>
  <div class="terms-of-use">
    <div class="container">
      <h1>Пользовательское соглашение</h1>

      <Preloader v-if="!terms.content"/>
      <p class="terms-of-use__text" v-html="terms.content" v-if="terms.content"/>
    </div>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "TermsOfUse",
  components: {Preloader},
  methods: {
    ...mapActions('terms', ['getTerms'])
  },
  computed: {
    ...mapState('terms', ['terms'])
  },
  mounted() {
    this.getTerms()
  }
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