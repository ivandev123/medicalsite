<template>
  <div class="video-review">
    <div class="video-review__image">
      <img src="@/assets/images/our-service.jpg" alt="image">
      <a href="https://docs.google.com/document/d/1AREyxhUtTcNfefjw2uXnhIIbhYtQaHCB7YJzvXjNS_Q/edit" class="video-review__play">
        <img src="@/assets/images/video-play.png" alt="play">
      </a>
    </div>
    <div class="video-review__info" v-if="showDesc">Отзыв матери о реабилитационном центре "Арма"</div>
  </div>
</template>

<script>
export default {
  name: "VideoReview",
  props: {
    showDesc: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
.video-review {
  &__image {
    position: relative;

    & > img {
      width: 100%;
      object-fit: cover;
    }
  }

  &__play {
    width: 65px;
    height: 45px;
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }

  &__info {
    display: block;
    padding: 15px;
    font-weight: 600;
    background: #24c8bc;
    color: #fff;
  }
}
</style>