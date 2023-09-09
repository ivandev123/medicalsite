<template>
  <div class="blog-author">
    <h2>Автор</h2>

    <Preloader style="margin-top: 20px;"/>
    <div class="blog-author__content blog-author__content_mt-20">
      <div class="blog-author__avatar" v-if="author_avatar">
        <img alt="avatar" :src="author_avatar">
      </div>
      <div class="blog-author__info">
        <h3>{{ author }}</h3>
        <p>{{ author_job }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader.vue";

export default {
  name: "BlogAuthor",
  components: {Preloader},
  props: ['author', 'author_job', 'author_avatar'],
}
</script>

<style scoped lang="scss">
.blog-author {
  margin-top: 40px;
  padding: 20px 25px;
  box-shadow: rgba(1, 1, 1, 0.05) 0 0 10px;
  border-radius: 10px;

  &__content {
    display: flex;
    gap: 25px 20px;

    &_mt-20 {
      margin-top: 20px;
    }
  }

  &__avatar {
    & > img {
      width: 74px;
      height: 74px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
}
</style>