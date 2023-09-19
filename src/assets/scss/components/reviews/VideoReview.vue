<template>
  <div class="video-review">
<!--    <div class="video-review__image">-->
<!--      <img src="@/assets/images/our-service.jpg" alt="image">-->
<!--      <a class="video-review__play" :href="link" target="_blank">-->
<!--        <img src="@/assets/images/video-play.png" alt="play">-->
<!--      </a>-->
<!--    </div>-->
<!--    <iframe-->
<!--        src="https://www.youtube.com/embed/KelNb0yUSlU"-->
<!--        title="YouTube video player"-->
<!--        frameborder="0"-->
<!--        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"-->
<!--        allowfullscreen-->
<!--    />-->
    <div v-html="link" @click="$emit('go-to-video', link)"/>
    <div class="video-review__info" v-if="title">{{ title }}</div>
  </div>
</template>

<script>

export default {
  name: "VideoReview",
  emits: ['go-to-video'],
  props: {
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped lang="scss">
.video-review {
  & ::v-deep {
    & iframe {
      width: 100% !important;
      height: 200px !important;
    }
  }

  & div:not([class]) {
    cursor: pointer;
    position: relative;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      z-index: 1;
    }
  }

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