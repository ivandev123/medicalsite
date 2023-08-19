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

    <div class="reviews-page__content reviews-page__content_mt-20">
      <TextReview/>
    </div>
  </div>
</template>

<script>

import Button2 from "@/components/utils/Button2.vue";
import TextReview from "@/assets/scss/components/reviews/TextReview.vue";

export default {
  name: "Reviews",
  components: {TextReview, Button2},
  data() {
    return {
      activeReviewType: 'text' //text, video
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

  &__content {
    &_mt-20 {
      margin-top: 20px;
    }
  }
}
</style>