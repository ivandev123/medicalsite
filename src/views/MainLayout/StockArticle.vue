<template>
  <div class="container">
    <StockArticleTop/>
    <InformationalArticles/>
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
}
</script>