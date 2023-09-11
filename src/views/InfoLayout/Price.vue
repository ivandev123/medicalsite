<template>
  <div class="price-page">
    <h1 class="price-page__title">Цены</h1>

    <Preloader style="margin-top: 20px;" v-if="!subcategories.length"/>
    <div class="price-page__content price-page__content_mt-20" v-if="subcategories.length">
      <CardWithDropdown
          v-for="card in subcategories"
          :key="card.id"
          :title="card.name"
          :dropdown="card.item.map(item => new Object({ id: item.id, name: item.content, price: item.price }))"
      />
    </div>
    <InformationalArticles type="small" :page-width="pageWidth"/>
  </div>
</template>

<script>
import InformationalArticles from "@/components/InformationalArticles.vue";
import CardWithDropdown from "@/components/utils/CardWithDropdown.vue";
import Preloader from "@/components/Preloader.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "Price",
  components: {Preloader, CardWithDropdown, InformationalArticles},
  data() {
    return {
      pageWidth: 0,
    }
  },
  methods: {
    ...mapActions('services', ['getSubcategories']),

    setWidth() {
      this.pageWidth = window.innerWidth
    },
  },
  computed: {
    ...mapState('services', ['subcategories']),
  },
  created() {
    this.setWidth()
    window.onresize = () => this.setWidth()
  },
  mounted() {
    this.getSubcategories()
  }
}
</script>

<style scoped lang="scss">
.price-page {
  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    &_mt-20 {
      margin-top: 20px;
    }
  }
}
</style>