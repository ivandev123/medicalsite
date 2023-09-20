<template>
  <div class="reviews-page">
    <Breadcrumbs :page-parent="{ name: 'Главная', path: '/' }" :breadcrumbs="[{ name: 'Отзывы', path: '/reviews' }]"/>
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

    <Preloader
        v-if="activeReviewType === 'text' && !reviews.text?.data || activeReviewType === 'video' && !reviews.video?.data"
    />
    <div class="reviews-page__texts reviews-page__texts_mt-20" v-if="activeReviewType === 'text'">
      <TextReview
          v-for="review in reviews.text.data"
          :key="review.id"
          :review="review"
      />
    </div>
    <div class="reviews-page__videos reviews-page__videos_mt-20" v-if="activeReviewType === 'video'">
      <VideoReview
          v-for="video in reviews.video.data"
          :key="video.id"
          :link="video.video"
          :title="video.video_title"
          @go-to-video="goToVideo"
      />
    </div>
    <Pagination
        :prev-page="getInfo(getPrevPageTextReviews, getPrevPageVideoReviews)"
        :next-page="getInfo(getNextPageTextReviews, getNextPageVideoReviews)"
        :links="getInfo(getLinksTextReviews, getLinksVideoReviews)"
    />
  </div>
  <WatchingVideoModal :video="selectedVideo" @close="selectedVideo = null" v-if="selectedVideo"/>
</template>

<script>

import Button2 from "@/components/utils/Button2.vue";
import TextReview from "@/assets/scss/components/reviews/TextReview.vue";
import VideoReview from "@/assets/scss/components/reviews/VideoReview.vue";
import { getReviews } from "@/api";
import Pagination from "@/components/utils/Pagination.vue";
import {mapActions, mapState} from "vuex";
import Preloader from "@/components/Preloader.vue";
import WatchingVideoModal from "@/components/modals/WatchingVideoModal.vue";
import Breadcrumbs from "@/components/utils/Breadcrumbs.vue";

export default {
  name: "Reviews",
  components: {Breadcrumbs, WatchingVideoModal, Preloader, Pagination, VideoReview, TextReview, Button2},
  data() {
    return {
      activeReviewType: 'text', //text, video
      selectedVideo: null,
    }
  },
  methods: {
    ...mapActions('reviews', ['getTextReviews', 'getVideoReviews']),

    getInfo(textReviews, videoReviews) {
      switch (this.activeReviewType) {
        case 'text':
          return textReviews
        case 'video':
          return videoReviews
      }
    },
    goToVideo(video) {
      this.selectedVideo = video
    }
  },
  computed: {
    ...mapState('reviews', ['reviews']),

    getPage() {
      return this.$route.query.page
    },
    getLinksVideoReviews() {
      return this.reviews.video?.links
          ?.slice(1, this.reviews.video.links.length - 1)
          .map(link => new Object({
            ...link,
            url: '/reviews?page=' + link.url.split('?page=')[1]
          }));
    },
    getPrevPageVideoReviews() {
      const page = this.reviews.video?.links?.[0].url?.split('?page=')[1]

      return page ? '/reviews?page=' + page : null
    },
    getNextPageVideoReviews() {
      const page = this.reviews.video?.links?.at(-1).url?.split('?page=')[1]

      return page ? '/reviews?page=' + page : null
    },
    getLinksTextReviews() {
      return this.reviews.text.links
          ?.slice(1, this.reviews.text.links.length - 1)
          .map(link => new Object({
            ...link,
            url: '/reviews?page=' + link.url.split('?page=')[1]
          }));
    },
    getPrevPageTextReviews() {
      const page = this.reviews.text.links?.[0].url?.split('?page=')[1]

      return page ? '/reviews?page=' + page : null
    },
    getNextPageTextReviews() {
      const page = this.reviews.text.links?.at(-1).url?.split('?page=')[1]

      return page ? '/reviews?page=' + page : null
    },
  },
  watch: {
    getPage() {
      if (this.activeReviewType === 'text') this.getTextReviews(this.getPage)
      if (this.activeReviewType === 'video') this.getVideoReviews(this.getPage)
    },
    activeReviewType() {
      this.$router.push('/reviews?page=1')
      if (!this.reviews.video.length) this.getVideoReviews(this.getPage ? this.getPage : 1)
    }
  },
  mounted() {
    this.getTextReviews(this.getPage ? this.getPage : 1)
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