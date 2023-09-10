<script>
import {mapActions, mapState} from "vuex";
import Preloader from "@/components/Preloader.vue";

export default {
  name: 'PreviewOfInfoArticles',
  components: {Preloader},
  methods: {
    ...mapActions('blog', ['getBlogArticles']),

    getDate(date) {
      return date
          .split('T')[0]
          .split('-')
    }
  },
  computed: {
    ...mapState('blog', ['blogArticles']),
    ...mapState(['months']),
  },
  mounted() {
    this.getBlogArticles()
  }
}
</script>

<template>
  <div class="preview-of-info-articles">
    <h1 class="preview-of-info-articles__title">Статьи</h1>

    <Preloader style="margin-top: 30px;" v-if="!blogArticles.length"/>
    <div class="preview-of-info-articles__content preview-of-info-articles__content_mt-30" v-if="blogArticles.length">
      <article
          class="preview-of-info-articles__item"
          v-for="article in blogArticles"
          :key="article.id"
      >
        <div class="preview-of-info-articles__item-image" @click="$router.push(`/blog/${article.id}`)">
          <img alt="image" :src="article.image">
        </div>
        <div class="preview-of-info-articles__item-info">
          <h3
              class="preview-of-info-articles__item-title preview-of-info-articles__item-title_mb-25"
              @click="$router.push(`/blog/${article.id}`)"
          >
            {{ article.title }}
          </h3>
          <p class="preview-of-info-articles__item-desc preview-of-info-articles__item-desc_mb-25">
            {{ article.description }}
          </p>

          <div
              class="preview-of-info-articles__item-more preview-of-info-articles__item-more_mb-20"
              @click="$router.push(`/blog/${article.id}`)"
          >Read More »</div>
        </div>
        <div class="preview-of-info-articles__item-meta">
          <span>{{ article.author }}</span>
          <span>{{ +getDate(article.created_at)[2] }} {{ months[+getDate(article.created_at)[1]] }}, {{ getDate(article.created_at)[0] }}</span>
          <span>{{ article.comments_count ? article.comments_count : 'Без комментариев' }}</span>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped lang="scss">
.preview-of-info-articles {
  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 35px;

    &_mt-30 {
      margin-top: 30px;
    }
  }

  &__item {
    width: 100%;
    min-height: 100%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .15);
    border: 0 solid #818a91;
    border-radius: 3px;
    overflow: hidden;
    background-color: #fff;
    transition: all .25s;
    position: relative;

    &:hover {
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, .15);

      & .preview-of-info-articles {
        &__item {
          &-image {
            &::after {
              opacity: .4;
            }
          }
        }
      }
    }

    &-image {
      cursor: pointer;
      position: relative;

      &::after {
        content: '';
        display: block;
        background-image: linear-gradient(0deg, rgba(0, 0, 0, .35), transparent 75%);
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        opacity: 1;
        transition: all .3s ease-out;
        position: absolute;
        bottom: 0;
      }

      & > img {
        width: 100%;
        object-fit: cover;
        transition: filter .3s,-webkit-filter .3s;
      }
    }

    &-info {
      margin-top: 40px;
      padding: 0 30px;
    }

    &-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 29px;
      letter-spacing: -.02em;
      color: #54595f;
      cursor: pointer;

      &_mb-25 {
        margin-bottom: 25px;
      }
    }

    &-desc {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.5em;
      color: #565656;

      &_mb-25 {
        margin-bottom: 25px;
      }
    }

    &-more {
      font-weight: 500;
      font-size: 12px;
      color: #61ce70;
      text-transform: uppercase;
      cursor: pointer;

      &_mb-20 {
        margin-bottom: 20px;
      }
    }

    &-meta {
      padding: 15px 30px;
      border: 1px solid #eaeaea;

      & > span {
        font-weight: 400;
        font-size: 12px;
        line-height: 1.3em;
        color: #adadad;

        &:nth-child(2) {
          text-transform: capitalize;
        }

        &:not(:first-child) {
          &::before {
            content: '•';
            margin: 0 5px;
          }
        }
      }
    }
  }
}
</style>