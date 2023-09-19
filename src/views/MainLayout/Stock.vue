<template>
  <div class="stock-page">
    <div class="container">
      <h1>Акция</h1>

      <Preloader style="margin-top: 20px;" v-if="!stocks.data?.length"/>

      <template v-if="stocks.data?.length">
        <div class="stock-page__content stock-page__content_mt-20">
          <StockItem
              v-for="stock in stocks.data"
              :key="stock.id"
              :stock="stock"
          />
        </div>
        <Pagination :prev-page="getPrevPage" :next-page="getNextPage" :links="getLinks"/>
      </template>
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
import {mapActions, mapState} from "vuex";
import Preloader from "@/components/Preloader.vue";

export default {
  name: "Stock",
  components: {Preloader, Pagination, StockItem, InformationalArticles, FooterCallToAction},
  data() {
    return {
      pageWidth: 0,
    }
  },
  methods: {
    ...mapActions('stocks', ['getStocks']),

    setWidth() {
      this.pageWidth = window.innerWidth
    },
  },
  computed: {
    ...mapState('stocks', ['stocks']),

    getPage() {
      return this.$route.query.page
    },
    getLinks() {
      return this.stocks.links
          ?.slice(1, this.stocks.links.length - 1)
          .map(link => new Object({
            ...link,
            url: link.url.split('/api')[1]
          }));
    },
    getPrevPage() {
      return this.stocks.links?.[0].url?.split('/api')[1]
      // return this.blogArticles?.links[0]?.url?.split('/api')[1]
    },
    getNextPage() {
      return this.stocks.links?.at(-1).url?.split('/api')[1]
    }
  },
  watch: {
    getPage() {
      this.getStocks(this.getPage)
    }
  },
  created() {
    this.setWidth()
    window.onresize = () => this.setWidth()
  },
  mounted() {
    this.getStocks(this.getPage ? this.getPage : 1)
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