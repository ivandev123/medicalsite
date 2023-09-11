<template>
  <div class="privacy-policy">
    <div class="container">
      <h1>Политика конфиденциальности</h1>

      <Preloader v-if="!policy.content"/>
      <p class="privacy-policy__text" v-html="policy.content" v-if="policy.content"/>
    </div>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "PrivacyPolicy",
  components: {Preloader},
  methods: {
    ...mapActions('policy', ['getPolicy']),
  },
  computed: {
    ...mapState('policy', ['policy']),
  },
  mounted() {
    this.getPolicy()
  }
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