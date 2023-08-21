<script>
import {defineComponent} from 'vue'
import Button from "@/components/utils/Button.vue";
import SliderButtons from "@/components/utils/SliderButtons.vue";
import { Carousel, Slide } from "vue3-carousel";
import ArticleItem from "@/components/ArticleItem.vue";

export default defineComponent({
  name: "InformationalArticles",
  props: {
    // 'pageWidth', 'title', 'type'
    pageWidth: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: 'Новости клиники'
    },
    type: {
      type: String,
      default: ''
    },
  },
  components: {ArticleItem, Button, SliderButtons, Carousel, Slide},
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
  }
})
</script>

<template>
  <div class="informational-articles">
    <div class="informational-articles__title informational-articles__title_mb-42">
      <h2>{{ title }}</h2>

      <div class="informational-articles__title-right">
        <Button name="Больше новостей" @click="$router.push('/blog')"/>
        <SliderButtons @prev="$refs.carousel.prev()" @next="$refs.carousel.next()"/>
      </div>
    </div>

    <Carousel ref="carousel" :items-to-show="getCountSlides">
      <Slide v-for="article in 5" :key="article.id">
        <ArticleItem/>
      </Slide>
    </Carousel>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/components/informationalArticles";
</style>