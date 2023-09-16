<template>
  <aside class="blog-article-sidebar">
    <div class="blog-article-sidebar__title blog-article-sidebar__title_mb-16">Table of contents</div>

    <div class="blog-article-sidebar__content">
<!--            <p class="article-sidebar__text">{{ headers }}</p>-->
<!--            <p class="blog-article-sidebar__text active blog-article-sidebar__text_my">-->
<!--              USA er det nest verste landet når det gjelder betalte feriedager, det verste er Mikronesia.-->
<!--            </p>-->
<!--            <p class="blog-article-sidebar__text blog-article-sidebar__text_mb-25">Balanse mellom arbeidsliv og fritid hele året</p>-->
<!--            <p class="blog-article-sidebar__text blog-article-sidebar__text_mb-25">San Marino har flest offentlige helligdager i <br> Europa.</p>-->
<!--            <p class="blog-article-sidebar__text blog-article-sidebar__text_mb-25">Metode og kilder</p>-->
<!--            <p class="blog-article-sidebar__text">Slik kommer du i gang  med cloud <br> mining lorem isum</p>-->
      <p
          class="blog-article-sidebar__text"
          :class="{ 'active': activeTitle === title }"
          v-for="(title, idx) in headers"
          :key="idx"
          @click="scrollToTitle(`h2-${idx}`, title)"
      >{{ title }}</p>
    </div>

    <div class="blog-article-sidebar__line"/>

    <div class="blog-article-sidebar__title blog-article-sidebar__title_mb-16 blog-article-sidebar__title_pl-12">Понравилась статья? Поделись с <br> друзьями!</div>

    <div class="blog-article-sidebar__networks blog-article-sidebar__networks_mb-40">
      <Networks/>
    </div>
  </aside>
</template>

<script>
import Networks from "@/components/Networks.vue";

export default {
  name: "BlogArticleSidebar",
  components: {Networks},
  props: ['headers'],
  data() {
    return {
      // headers: ['Заголовок 1', 'Заголовок 2', 'Длинный заголовок Длинный заголовок Длинный заголовок'],
      activeTitle: ''
    }
  },
  methods: {
    scrollToTitle(ref, title) {
      this.activeTitle = title
      this.$emit('scroll-to-title', ref)
    }
  },
  watch: {
    'headers.length'() {
      this.activeTitle = this.headers[0]
    }
  },
}
</script>

<style scoped lang="scss">
.blog-article-sidebar {
  flex-shrink: 0;
  width: 360px;
  height: fit-content;
  position: sticky;
  top: 131px;

  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #262626;

    &_pl-12 {
      padding-left: 12px;
    }

    &_mb-25 {
      margin-bottom: 25px;
    }

    &_mb-16 {
      margin-bottom: 16px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }

  &__text {
    padding: 9px 12px 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #4B535A;
    cursor: pointer;

    &.active {
      padding: 8px 12px;
      background: #FFFFFF;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      color: #FF6100;
    }

    &_mb-25 {
      margin-bottom: 25px;
    }

    &_my {
      margin: 16px 0 17px;
    }
  }

  &__line {
    margin: 32px 0 22px;
    height: 1px;
    background: #DFDFDF;
  }

  &__networks {
    display: flex;
    align-items: center;
    column-gap: 32px;
    padding-left: 12px;

    &_mb-40 {
      margin-bottom: 40px;
    }
  }
}

@media screen and (max-width: 1014px) {
  .blog-article-sidebar {
    flex-shrink: unset;
    width: 100%;

    &__title {
      & > br {
        display: none;
      }
    }
  }
}
</style>