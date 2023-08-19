<template>
  <div class="reviews-page">
    <h1 class="reviews-page__title reviews-page__title_mb-20">Отзывы</h1>

    <div class="reviews-page__tabs">
      <Button2
          name="Текстовые отзывы"
          :class="{ 'active': activeReviewType === 'text' }"
          @click="activeReviewType = 'text'"
      />
      <Button2
          name="Видео отзывы"
          :class="{ 'active': activeReviewType === 'video' }"
          @click="activeReviewType = 'video'"
      />
    </div>

    <div class="reviews-page__texts reviews-page__texts_mt-20" v-if="activeReviewType === 'text'">
      <TextReview
          v-for="item in 8"
          :key="item"
      />
    </div>
    <div class="reviews-page__videos reviews-page__videos_mt-20" v-if="activeReviewType === 'video'">
      <VideoReview
          v-for="item in 8"
          :key="item"
      />
    </div>
  </div>
</template>

<script>

import Button2 from "@/components/utils/Button2.vue";
import TextReview from "@/assets/scss/components/reviews/TextReview.vue";
import VideoReview from "@/assets/scss/components/reviews/VideoReview.vue";

export default {
  name: "Reviews",
  components: {VideoReview, TextReview, Button2},
  data() {
    return {
      activeReviewType: 'video' //text, video
    }
  }
}
</script>

<style scoped lang="scss">
.reviews-page {
  &__title {
    &_mb-20 {
      margin-bottom: 20px;
    }
  }

  &__texts,
  &__videos {
    &_mt-20 {
      margin-top: 20px;
    }
  }

  &__texts {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  &__videos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }
}
</style>