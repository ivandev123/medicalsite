<template>
  <div class="photo-page">
    <Breadcrumbs :page-parent="{ name: 'Главная', path: '/' }" :breadcrumbs="[{ name: 'Фотогалерея', path: '/photo' }]"/>
    <h1 class="photo-page__title">Фотогалерея</h1>

    <Preloader style="margin-top: 20px;" v-if="!gallery.length"/>
    <div class="photo-page__content photo-page__content_mt-20" v-if="gallery.length">
      <PhotoItem
          v-for="photo in gallery"
          :key="photo"
          :title="photo.title"
          :image="photo.image"
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
import {mapActions, mapState} from "vuex";
import Breadcrumbs from "@/components/utils/Breadcrumbs.vue";

export default {
  name: "Photo",
  components: {Breadcrumbs, Preloader, InformationalArticles, Reviews, PhotoItem},
  data() {
    return {
      pageWidth: 0,
    }
  },
  methods: {
    ...mapActions('gallery', ['getPhotoGallery']),

    setWidth() {
      this.pageWidth = window.innerWidth
    },
  },
  created() {
    this.setWidth()
    window.onresize = () => this.setWidth()
  },
  computed: {
    ...mapState('gallery', ['gallery']),
  },
  mounted() {
    this.getPhotoGallery()
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