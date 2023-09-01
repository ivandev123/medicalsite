<template>
  <section class="our-services">
    <h2 class="our-services__title">Наши услуги</h2>

    <div class="our-services__content our-services__content_mt-42">
      <RouterLink
          class="our-services__service"
          to="/"
          v-for="(service, idx) in services"
          :key="service.id"
      >
        <div class="our-services__picture">
          <img src="../../../assets/images/our-service.jpg" alt="service">
        </div>
        <div class="our-services__info">
          <div class="our-services__info-title">{{ service.name }}</div>
          <div class="our-services__info-subtitle">{{ service.subtitle }}</div>
          <div class="our-services__number">{{ idx + 1 }}</div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "OurServices",
  computed: {
    ...mapState('services', ['services']),
  },
  mounted() {
    if (!this.services.length) this.$store.dispatch('services/getServices')
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/home/ourServices";
</style>