<script>
import {defineComponent} from 'vue'
import Button from "@/components/utils/Button.vue";
import SliderButtons from "@/components/utils/SliderButtons.vue";
import { Carousel, Slide } from "vue3-carousel";
import ArticleItem from "@/components/ArticleItem.vue";
import {mapActions, mapState} from "vuex";
import Preloader from "@/components/Preloader.vue";

export default defineComponent({
  name: "InformationalArticles",
  components: {Preloader, ArticleItem, Button, SliderButtons, Carousel, Slide},
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
  methods: {
    ...mapActions('blog', ['getBlogArticles'])
  },
  computed: {
    ...mapState('blog', ['blogArticles']),

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
    this.getBlogArticles()
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

    <Preloader v-if="!blogArticles.data?.length"/>
    <Carousel ref="carousel" :items-to-show="getCountSlides" v-if="blogArticles.data?.length">
      <Slide v-for="article in blogArticles.data" :key="article.id">
        <ArticleItem
            :image="article.blog_image"
            :title="article.title"
            :date="article.created_at"
            :views="article.views"
            @click="$router.push(`/stock/${article.id}`)"
        />
      </Slide>
    </Carousel>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/components/informationalArticles";
</style>