<template>
  <div class="our-certificates">
    <h2 class="our-certificates__title">Наши сертификаты и лицензии</h2>

    <Preloader style="margin-top: 50px;" v-if="!certificates.length"/>
    <div class="our-certificates__content our-certificates__content_mt-50" v-if="certificates.length">
      <Carousel class="our-certificates__carousel" :items-to-show="getCountSlides" :autoplay="10000" :wrap-around="true" :transition="500">
        <Slide v-for="item in certificates" :key="item">
          <RouterLink class="our-certificates__item" to="">
            <img alt="certificate" :src="item.image">
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
import { getCertificates } from "@/api";
import Preloader from "@/components/Preloader.vue";

export default {
  name: "OurCertificates",
  props: {
    pageWidth: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: '',
      // 'small'
    }
  },
  components: {
    Preloader,
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      certificates: [],
    }
  },
  computed: {
    getCountSlides() {
      const getCount = (firstNum, secondNum) => {
        return !this.type ? firstNum : this.type === 'small' ? secondNum : 0
      }

      const getWidthValid = (firstNum, secondNum) => {
        return this.pageWidth < firstNum || this.pageWidth < secondNum && this.type === 'small'
      }

      if (this.pageWidth < 598) {
        return 1
      } else if (getWidthValid(900, 1180)) {
        return 2
      } else if (this.pageWidth < 1220) {
        return 3
      }

      return getCount(4, 3)
    }
  },
  mounted() {
    getCertificates().then(response => this.certificates = response)
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/ourCertificates";
</style>