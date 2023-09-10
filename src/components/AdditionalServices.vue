<template>
  <div class="additional-services">
    <h2 class="additional-services__title">
      Дополнительные услуги
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
        <path d="M13.636 26.666v-9.29l-8.02 4.648-1.37-2.38 8.02-4.641-8.02-4.642 1.37-2.38 8.02 4.648V3.333h2.728v9.296L24.39 7.98l1.364 2.38-8.02 4.642 8.02 4.642-1.364 2.38-8.026-4.648v9.29h-2.728Z" fill="#24C8BC"/>
        <path d="M11.772 0a.804.804 0 0 0-.807.79v7.372L4.437 4.476a.817.817 0 0 0-1.102.29L.108 10.234a.79.79 0 0 0 .296 1.078L6.93 15 .404 18.687a.78.78 0 0 0-.296 1.078l3.228 5.47a.824.824 0 0 0 1.102.289l6.526-3.687v7.374c0 .436.362.789.808.789h6.455a.782.782 0 0 0 .807-.79v-7.373l6.527 3.687a.817.817 0 0 0 1.102-.29l3.228-5.469a.78.78 0 0 0-.296-1.078L23.07 15l6.526-3.687a.78.78 0 0 0 .296-1.078l-3.228-5.47c-.236-.408-.744-.491-1.102-.289l-6.528 3.686.001-7.372a.798.798 0 0 0-.807-.79h-6.455Zm5.648 1.578V9.53c0 .622.7.972 1.21.684l7.039-3.976 2.42 4.103-7.038 3.975a.781.781 0 0 0 0 1.368l7.038 3.975-2.42 4.103-7.039-3.976a.803.803 0 0 0-1.21.683v7.951h-4.842v-7.95c0-.64-.699-.973-1.21-.684L4.33 23.762l-2.421-4.103 7.038-3.975a.785.785 0 0 0 0-1.368L1.91 10.34l2.42-4.102 7.039 3.975a.803.803 0 0 0 1.21-.683V1.578h4.842Z" fill="#24C8BC"/>
      </svg>
    </h2>

    <Preloader style="margin: 40px 0 20px;" v-if="!additionalServices.length"/>
    <div class="additional-services__content" v-if="additionalServices.length">
      <div class="additional-services__service" v-for="item in additionalServices" :key="item.id">
        <div class="additional-services__service-circle">
          <img alt="icon" :src="item.image">
        </div>

        <ul class="additional-services__list additional-services__list_mt-20">
          <li v-for="service in item.additionalservices" :key="service.id">{{ service.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "AdditionalServices",
  components: {Preloader},
  methods: {
    ...mapActions('additionalServices', ['getAdditionalServices']),
  },
  computed: {
    ...mapState('additionalServices', ['additionalServices']),
  },
  mounted() {
    this.getAdditionalServices()
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/additionalServices";
</style>