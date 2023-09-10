<template>
  <div class="mass-media-about-us">
    <div class="container">
      <h1>СМИ о нас пишут</h1>

      <Preloader style="margin-top: 20px;" v-if="!media.length"/>
      <div class="mass-media-about-us__articles mass-media-about-us__articles_mt-20" v-if="media.length">
        <a
            rel="nofollow"
            target="_blank"
            v-for="article in media"
            :key="article.id"
            :href="article.url"
        >
          <ArticleItem :image="article.image"/>
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
import Preloader from "@/components/Preloader.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "MassMediaAboutUs",
  components: {Preloader, ArticleItem, InformationalArticles, FooterCallToAction},
  data() {
    return {
      pageWidth: 0,
    }
  },
  methods: {
    ...mapActions('media', ['getMassMediaAboutUs']),

    setWidth() {
      this.pageWidth = window.innerWidth
    },
  },
  computed: {
    ...mapState('media', ['media']),
  },
  created() {
    this.setWidth()
    window.onresize = () => this.setWidth()
  },
  mounted() {
    this.getMassMediaAboutUs()
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