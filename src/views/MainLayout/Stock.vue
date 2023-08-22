<template>
  <div class="stock-page">
    <div class="container">
      <h1>Акция</h1>

      <div class="stock-page__content stock-page__content_mt-20">
        <StockItem
            v-for="item in 6"
            :key="item"
        />
      </div>
      <Pagination :count="10"/>
      <InformationalArticles :page-width="pageWidth"/>
    </div>
  </div>
  <FooterCallToAction/>
</template>

<script>
import FooterCallToAction from "@/components/layouts/FooterCallToAction.vue";
import InformationalArticles from "@/components/InformationalArticles.vue";
import StockItem from "@/components/views/stock/StockItem.vue";
import Pagination from "@/components/utils/Pagination.vue";

export default {
  name: "Stock",
  components: {Pagination, StockItem, InformationalArticles, FooterCallToAction},
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