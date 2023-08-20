<template>
  <div class="block-of-video-lectures">
    <h1>Видео лекции</h1>

    <div class="block-of-video-lectures__content block-of-video-lectures__content_mt-20">
      <VideoReview
          :show-desc="false"
          v-for="item in 6"
          :key="item"
      />
    </div>

    <Pagination :count="10"/>
  </div>
</template>

<script>
import VideoReview from "@/assets/scss/components/reviews/VideoReview.vue";
import Pagination from "@/components/utils/Pagination.vue";

export default {
  name: "BlockOfVideoLectures",
  components: {Pagination, VideoReview}
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