<template>
  <div class="mass-media-about-us">
    <div class="container">
      <h1>СМИ о нас пишут</h1>

      <div class="mass-media-about-us__articles mass-media-about-us__articles_mt-20">
        <a
            href="#"
            rel="nofollow"
            v-for="item in 10"
            :key="item"
        >
          <ArticleItem :show-count-views="false"/>
        </a>
      </div>

      <InformationalArticles :page-width="pageWidth"/>
    </div>
  </div>
  <FooterCallToAction/>
</template>

<script>
import FooterCallToAction from "@/components/layouts/FooterCallToAction.vue";
import InformationalArticles from "@/components/InformationalArticles.vue";
import ArticleItem from "@/components/ArticleItem.vue";

export default {
  name: "MassMediaAboutUs",
  components: {ArticleItem, InformationalArticles, FooterCallToAction},
  data() {
    return {
      pageWidth: 0,
    }
  },
  methods: {
    setWidth() {
      this.pageWidth = window.innerWidth
    },
  },
  created() {
    this.setWidth()
    window.onresize = () => this.setWidth()
  }
}
</script>

<style scoped lang="scss">
.mass-media-about-us {
  &__articles {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 25px;

    &_mt-20 {
      margin-top: 20px;
    }

    & > a {
      width: fit-content;
    }
  }
}

@media screen and (max-width: 1220px) {
  .mass-media-about-us {
    &__articles {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>