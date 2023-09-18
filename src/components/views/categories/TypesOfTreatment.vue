<template>
  <div class="types-of-treatment">
    <h2 class="types-of-treatment__title">Наши цены</h2>

    <Preloader style="margin-top: 20px;" v-if="!prices?.length"/>
    <div class="types-of-treatment__content types-of-treatment__content_mt-20" v-if="prices?.length">
      <CardWithDropdown
          v-for="card in prices"
          :key="card.id"
          :title="card.name"
          :dropdown="card.item.map(item => new Object({ id: item.id, name: item.content, price: item.price, path: card.path + `/service/${item.id}` }))"
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
  props: ['prices']
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