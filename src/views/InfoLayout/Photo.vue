<template>
  <div class="photo-page">
    <h1 class="photo-page__title">Фотогалерея</h1>

    <Preloader style="margin-top: 20px;"/>
    <div class="photo-page__content photo-page__content_mt-20">
      <PhotoItem
          v-for="item in 9"
          :key="item"
      />
    </div>
    <Reviews/>
    <InformationalArticles type="small" :page-width="pageWidth"/>
  </div>
</template>

<script>
import PhotoItem from "@/components/views/photo/PhotoItem.vue";
import Reviews from "@/components/Reviews.vue";
import InformationalArticles from "@/components/InformationalArticles.vue";
import Preloader from "@/components/Preloader.vue";

export default {
  name: "Photo",
  components: {Preloader, InformationalArticles, Reviews, PhotoItem},
  data() {
    return {
      pageWidth: 0,
    }
  },
  methods: {
    setWidth() {
      this.pageWidth = window.innerWidth
    },
  },
  created() {
    this.setWidth()
    window.onresize = () => this.setWidth()
  }
}
</script>

<style scoped lang="scss">
.photo-page {
  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;

    &_mt-20 {
      margin-top: 20px;
    }
  }
}
</style>