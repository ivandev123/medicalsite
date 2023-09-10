<template>
  <div class="block-of-video-lectures">
    <h1>Видео лекции</h1>

    <Preloader style="margin-top: 20px;" v-if="!videoLectures.length"/>
    <div class="block-of-video-lectures__content block-of-video-lectures__content_mt-20" v-if="videoLectures.length">
      <VideoReview
          v-for="video in videoLectures"
          :key="video.id"
          :id="video.id"
          @go-to-video="goToVideo"
      />
    </div>

    <Pagination :count="10"/>
  </div>
</template>

<script>
import VideoReview from "@/assets/scss/components/reviews/VideoReview.vue";
import Pagination from "@/components/utils/Pagination.vue";
import Preloader from "@/components/Preloader.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "BlockOfVideoLectures",
  components: {Preloader, Pagination, VideoReview},
  methods: {
    ...mapActions('videoLectures', ['getVideoLectures']),

    goToVideo(id) {
      const index = this.videoLectures.map(video => video.id).indexOf(id)
      window.open(this.videoLectures[index].video, '_blank')
    }
  },
  computed: {
    ...mapState('videoLectures', ['videoLectures']),
  },
  mounted() {
    this.getVideoLectures()
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