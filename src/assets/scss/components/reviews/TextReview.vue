<template>
  <div class="text-review">
    <div class="text-review__info">
      <div class="text-review__name">{{ review.name }}</div>
      <div class="text-review__date">{{ `${+getDate?.[2]} ${months[+getDate?.[1]]} ${getDate?.[0]}` }}</div>
<!--      <div class="text-review__date">22 марта 2022</div>-->
    </div>

    <p class="text-review__text">{{ review.content }}</p>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "TextReview",
  props: ['review'],
  computed: {
    ...mapState(['months']),

    getDate() {
      return this.review.created_at
          ?.split(' ')[0]
          .split('-')
    }
  }
}
</script>

<style scoped lang="scss">
.text-review {
  padding: 32px 32px;
  border-radius: 8px;
  background: linear-gradient(180deg, #FFFFFF 10.26%, rgba(255, 255, 255, 0) 100%);

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__name {
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;
    color: #211E1C;
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      height: 4px;
      width: 32px;
      background-color: #24c8bc;
      transform: rotate(-90deg);
      position: absolute;
      left: -12px;
    }
  }

  &__date {
    font-weight: 400;
    font-size: 15px;
    line-height: 32px;
    color: #595450;
  }

  &__text {
    margin: 16px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #211E1C;
  }
}
</style>