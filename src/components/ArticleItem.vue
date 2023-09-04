<template>
  <div class="article-item">
    <img alt="article image" class="article-item__image" :src="image">
    <div class="article-item__info article-item__info_mt-12">
      <div class="article-item__date">{{ `${getDate?.reverse().join('.')}` }}</div>
<!--      31.07.2023-->
      <div class="article-item__tag" v-if="views !== undefined">
        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 576 512">
          <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"/>
        </svg>
        {{ views }}
      </div>
    </div>
    <div class="article-item__title article-item__title_mt-14">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
  props: {
    image: String,
    title: String,
    date: String,
    views: Number,
  },
  computed: {
    getDate() {
      return this.date
          .split('T')[0]
          .split('-')
    }
  }
}
</script>

<style scoped lang="scss">
.article-item {
  max-width: 270px;
  width: 100%;
  cursor: pointer;

  &:hover {
    & .article-item {
      &__title {
        color: #24c8bc;
        text-decoration: underline;
        transition: .25s;
      }
    }
  }

  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #011226;
    text-align: start;
    transition: .25s;

    &_mt-14 {
      margin-top: 14px;
    }
  }

  &__image {
    margin: 0 auto;
    //height: 300px;
    border-radius: 12px;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_mt-12 {
      margin-top: 12px;
    }
  }

  &__date {
    font-weight: 600;
    line-height: 20px;
    color: #4B535A;
  }

  &__tag {
    display: flex;
    align-items: center;
    column-gap: 7px;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    letter-spacing: 0.03em;

    &.green {
      color: #4EC8BF;
    }

    &.orange {
      color: #FFA765;
    }
  }
}
</style>