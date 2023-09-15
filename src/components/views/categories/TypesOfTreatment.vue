<template>
  <div class="types-of-treatment">
    <h2 class="types-of-treatment__title">Наши цены</h2>

    <Preloader style="margin-top: 20px;" v-if="!subcategories.length"/>
    <div class="types-of-treatment__content types-of-treatment__content_mt-20" v-if="subcategories.length">
      <CardWithDropdown
          v-for="card in subcategories"
          :key="card.id"
          :title="card.name"
          :dropdown="card.item.map(item => new Object({ id: item.id, name: item.content, price: item.price }))"
      />
    </div>
  </div>
</template>

<script>
import CardWithDropdown from "@/components/utils/CardWithDropdown.vue";
import Preloader from "@/components/Preloader.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "TypesOfTreatment",
  components: {Preloader, CardWithDropdown},
  methods: {
    ...mapActions('services', ['getSubcategories']),
  },
  computed: {
    ...mapState('services', ['subcategories']),
  },
  mounted() {
    this.getSubcategories()
  }
}
</script>

<style scoped lang="scss">
.types-of-treatment {
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