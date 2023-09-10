<template>
  <div class="comments">
    <h2>Комментарии: {{ commentsCount }}</h2>

    <Preloader style="margin-top: 20px;" v-if="!comments.length"/>
    <div class="comments__content comments__content_mt-20" v-if="comments.length">
      <div class="comments__item" v-for="comment in comments" :key="comment.id">
        <img src="@/assets/images/reviews-avatar.jpeg" alt="avatar" class="comments__item-avatar">

        <div class="comments__item-info">
          <div>
            <h3>{{ comment.name }}</h3>
            <time>{{ getDate(comment.created_at) }}</time>
<!--            <time>26.05.2016 в 17:30</time>-->
          </div>
          <p>{{ comment.comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader.vue";

export default {
  name: "Comments",
  components: {Preloader},
  props: ['commentsCount', 'comments'],
  methods: {
    getDate(date) {
      const dateArray = date.split('T');

      const date2 = dateArray[0].split('-').reverse().join('.')
      const time = dateArray[1].split('.')[0]

      return `${date2} в ${time}`
    }
  }
}
</script>

<style scoped lang="scss">
.comments {
  margin-top: 40px;

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 25px;

    &_mt-20 {
      margin-top: 20px;
    }
  }

  &__item {
    display: flex;
    column-gap: 15px;

    &-avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      object-fit: cover;
    }

    &-info {
      display: flex;
      flex-direction: column;
      row-gap: 5px;

      & > div {
        display: flex;
        align-items: center;
        column-gap: 40px;

        & > time {
          color: #9DA0AF;
        }
      }

      & > p {

      }
    }
  }
}
</style>