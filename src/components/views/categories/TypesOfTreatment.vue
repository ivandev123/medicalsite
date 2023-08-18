<template>
  <div class="types-of-treatment">
    <h2 class="types-of-treatment__title">Наши цены</h2>

    <div class="types-of-treatment__content types-of-treatment__content_mt-20">
      <CardWithDropdown
          v-for="card in cards"
          :key="card.id"
          :card="card"
      />
    </div>
  </div>
</template>

<script>
import CardWithDropdown from "@/components/utils/CardWithDropdown.vue";

export default {
  name: "TypesOfTreatment",
  components: {CardWithDropdown},
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
      ]
    }
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