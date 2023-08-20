<template>
  <div class="stock-page">
    <div class="container">
      <h1>Акция</h1>

      <div class="stock-page__content stock-page__content_mt-20">
        <StockItem
            v-for="item in 10"
            :key="item"
        />
      </div>
      <InformationalArticles/>
    </div>
  </div>
  <FooterCallToAction/>
</template>

<script>
import FooterCallToAction from "@/components/layouts/FooterCallToAction.vue";
import InformationalArticles from "@/components/InformationalArticles.vue";
import StockItem from "@/components/views/stock/StockItem.vue";

export default {
  name: "Stock",
  components: {StockItem, InformationalArticles, FooterCallToAction}
}
</script>

<style scoped lang="scss">
.stock-page {
  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;

    &_mt-20 {
      margin-top: 20px;
    }
  }
}
</style>