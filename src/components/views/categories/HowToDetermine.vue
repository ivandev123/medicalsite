<template>
  <div class="how-to-determine">
    <h2 class="how-to-determine__title">Как выявить</h2>

    <div class="how-to-determine__content how-to-determine__content_mt-20">
      <div
          class="how-to-determine__item"
          v-for="(item, idx) in items"
          :key="item.id"
      >
        <div class="how-to-determine__item-num">{{ idx + 1 < 10 ? `0${idx + 1}` : idx }}</div>
        <div class="how-to-determine__item-description" v-html="item.name"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowToDetermine",
  data() {
    return {
      items: [
        {
          id: 1,
          name: '<strong>Изменение поведения.</strong> Обратите внимание на радикальные изменения в поведении и характере. Наркомания может вызвать нарушения сна, аппетита, настроения и интересов.'
        },
        {
          id: 2,
          name: '<strong>Физические симптомы.</strong> Выявление физических признаков, таких как изменение веса, изменения внешности (кожа, глаза), появление синяков и рубцов от инъекций.'
        },
        {
          id: 3,
          name: '<strong>Изоляция и отчуждение.</strong> Наркомания может вести к социальной изоляции. Обратите внимание, если человек начал уходить от семьи и друзей.'
        },
        {
          id: 4,
          name: '<strong>Финансовые проблемы.</strong> Частые финансовые затруднения, займы или продажа ценных вещей могут свидетельствовать о наркомании.'
        },
        {
          id: 5,
          name: '<strong>Потребление наркотиков.</strong> Если вы находите подозрительные предметы, такие как шприцы, пакетики с наркотиками или специфические инструменты, это явные признаки.'
        },
        {
          id: 6,
          name: '<strong>Психологический анализ.</strong> Консультация с психологом или наркологом может помочь понять, есть ли признаки наркомании, основываясь на изменениях в психическом состоянии и эмоциональном благополучии.'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.how-to-determine {
  margin-top: 30px;

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    //justify-content: space-between;

    &_mt-20 {
      margin-top: 20px;
    }
  }

  &__item {
    width: 100%;
    border: 2px solid rgba(255, 167, 101, .3);
    border-radius: 10px;
    padding: 20px;

    &-num {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #FFFFFF;
      font-weight: 400;
      font-size: 25px;
      line-height: 56px;
      color: #FFA765;
      text-align: center;
    }

    &-description {
      margin-top: 20px;
      font-size: 14px;
      line-height: 24px;
      color: #262626;
    }
  }
}
</style>