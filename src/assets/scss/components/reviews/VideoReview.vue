<template>
  <div class="video-review">
    <div class="video-review__image">
      <img src="@/assets/images/our-service.jpg" alt="image">
      <div class="video-review__play" @click="$emit('go-to-video', id)">
        <img src="@/assets/images/video-play.png" alt="play">
      </div>
    </div>
    <div class="video-review__info" v-if="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "VideoReview",
  emits: ['go-to-video'],
  props: {
    id: {
      type: Number,
      default: -1,
    },
    title: {
      type: String,
      default: ''
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
    cursor: pointer;
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