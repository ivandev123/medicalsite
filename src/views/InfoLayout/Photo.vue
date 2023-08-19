<template>
  <div class="photo-page">
    <h1 class="photo-page__title">Фотогалерея</h1>

    <div class="photo-page__content photo-page__content_mt-20">
      <PhotoItem
          v-for="item in 10"
          :key="item"
      />
    </div>
    <Reviews/>
    <InformationalArticles type="small"/>
  </div>
</template>

<script>
import PhotoItem from "@/components/views/photo/PhotoItem.vue";
import Reviews from "@/components/Reviews.vue";
import InformationalArticles from "@/components/InformationalArticles.vue";

export default {
  name: "Photo",
  components: {InformationalArticles, Reviews, PhotoItem},
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