<template>
  <div class="container">
    <StockArticleTop/>
    <InformationalArticles :page-width="pageWidth"/>
  </div>
  <FooterCallToAction/>
</template>

<script>
import FooterCallToAction from "@/components/layouts/FooterCallToAction.vue";
import StockArticleTop from "@/components/views/stockArticle/StockArticleTop.vue";
import InformationalArticles from "@/components/InformationalArticles.vue";

export default {
  name: "StockArticle",
  components: {InformationalArticles, StockArticleTop, FooterCallToAction},
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