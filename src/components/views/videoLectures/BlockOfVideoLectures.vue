<template>
  <div class="block-of-video-lectures">
    <Breadcrumbs :page-parent="{ name: 'Главная', path: '/' }" :breadcrumbs="[{ name: 'Видео лекции', path: '/video-lectures' }]"/>
    <h1>Видео лекции</h1>

    <Preloader style="margin-top: 20px;" v-if="!videoLectures.data?.length"/>
    <div class="block-of-video-lectures__content block-of-video-lectures__content_mt-20" v-if="videoLectures.data?.length">
      <VideoReview
          v-for="video in videoLectures.data"
          :key="video.id"
          :link="video.video"
          @go-to-video="goToVideo"
      />
    </div>

    <Pagination :prev-page="getPrevPage" :next-page="getNextPage" :links="getLinks"/>
  </div>
</template>

<script>
import VideoReview from "@/assets/scss/components/reviews/VideoReview.vue";
import Pagination from "@/components/utils/Pagination.vue";
import Preloader from "@/components/Preloader.vue";
import {mapActions, mapState} from "vuex";
import Breadcrumbs from "@/components/utils/Breadcrumbs.vue";

export default {
  name: "BlockOfVideoLectures",
  components: {Breadcrumbs, Preloader, Pagination, VideoReview},
  methods: {
    ...mapActions('videoLectures', ['getVideoLectures']),

    goToVideo(id) {
      const index = this.videoLectures.map(video => video.id).indexOf(id)
      window.open(this.videoLectures[index].video, '_blank')
    }
  },
  computed: {
    ...mapState('videoLectures', ['videoLectures']),

    getPage() {
      return this.$route.query.page
    },
    getLinks() {
      return this.videoLectures.links
          ?.slice(1, this.videoLectures.links.length - 1)
          .map(link => new Object({
            ...link,
            url: '/video-lectures?page=' + link.url.split('?page=')[1]
          }));
    },
    getPrevPage() {
      const link = this.videoLectures.links?.[0].url?.split('?page=')[1]

      return link ? '/video-lectures?page=' + link : null
    },
    getNextPage() {
      const link = this.videoLectures.links?.at(-1).url?.split('?page=')[1]

      return link ? '/video-lectures?page=' + link : null
    }
  },
  watch: {
    getPage() {
      this.getVideoLectures(this.getPage)
    }
  },
  mounted() {
    this.getVideoLectures(this.getPage ? this.getPage : 1)
  }
}
</script>

<style scoped lang="scss">
.block-of-video-lectures {
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