<template>
  <div class="our-certificates">
    <h2 class="our-certificates__title">Наши сертификаты и лицензии</h2>

    <div class="our-certificates__content our-certificates__content_mt-50">
      <Carousel class="our-certificates__carousel" :items-to-show="4" :autoplay="10000" :wrap-around="true" :transition="500">
        <Slide v-for="item in 5" :key="item">
          <RouterLink class="our-certificates__item" to="">
            <img src="@/assets/images/certificate.jpg" alt="certificate">
          </RouterLink>
        </Slide>

        <template #addons>
          <Pagination/>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default {
  name: "OurCertificates",
  components: {
    Carousel,
    Slide,
    Pagination,
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/ourCertificates";
</style>