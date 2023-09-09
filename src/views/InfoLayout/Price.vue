<template>
  <div class="price-page">
    <h1 class="price-page__title">Цены</h1>

    <Preloader style="margin-top: 20px;"/>
    <div class="price-page__content price-page__content_mt-20">
      <CardWithDropdown
          v-for="card in cards"
          :key="card.id"
          :card="card"
      />
    </div>
    <InformationalArticles type="small" :page-width="pageWidth"/>
  </div>
</template>

<script>
import InformationalArticles from "@/components/InformationalArticles.vue";
import CardWithDropdown from "@/components/utils/CardWithDropdown.vue";
import Preloader from "@/components/Preloader.vue";

export default {
  name: "Price",
  components: {Preloader, CardWithDropdown, InformationalArticles},
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'Вызов нарколога на дом',
          dropdown: [
            {
              id: 1,
              name: 'Первичная консультация по телефону + индивидуальный план лечения',
              price: null
            },
            {
              id: 2,
              name: 'Консультация нарколога на дому',
              price: 2000
            },
            {
              id: 3,
              name: 'Выезд команды интервенции (убеждение лечиться)',
              price: 4000
            },
            {
              id: 4,
              name: 'Вывод из запоя на дому',
              price: 3000
            },
            {
              id: 5,
              name: 'Вывод из запоя (двойная система капельниц)',
              price: 4500
            },
          ],
        },
        {
          id: 2,
          title: 'Лечение в стационаре',
          dropdown: [
            {
              id: 1,
              name: 'Первичная консультация по телефону + индивидуальный план лечения',
              price: null
            },
            {
              id: 2,
              name: 'Консультация нарколога на дому',
              price: 2000
            },
            {
              id: 3,
              name: 'Выезд команды интервенции (убеждение лечиться)',
              price: 4000
            },
            {
              id: 4,
              name: 'Вывод из запоя на дому',
              price: 3000
            },
            {
              id: 5,
              name: 'Вывод из запоя (двойная система капельниц)',
              price: 4500
            },
          ],
        },
      ],
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