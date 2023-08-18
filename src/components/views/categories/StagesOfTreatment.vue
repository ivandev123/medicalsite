<template>
  <div class="stages-of-treatment">
    <h2 class="stages-of-treatment__title">Методы лечения алкоголизма в нашем центре</h2>

    <div class="stages-of-treatment__content stages-of-treatment__content_mt-30">
      <div
          class="stages-of-treatment__item"
          v-for="(stage, idx) in stages"
          :key="stage.id"
      >
        <div class="stages-of-treatment__item-body">
          <span>{{ idx + 1 }}</span>
        </div>
        <div class="stages-of-treatment__item-title">{{ stage.title }}</div>
        <div class="stages-of-treatment__item-description">{{ stage.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StagesOfTreatment",
  data() {
    return {
      stages: [
        {
          id: 1,
          title: 'Обращение',
          description: 'Приезжаем на вызов за 30 минут'
        },
        {
          id: 2,
          title: 'Консультация',
          description: 'По телефону или на личном приеме'
        },
        {
          id: 3,
          title: 'Мотивация',
          description: 'Убедим пациента пройти лечение'
        },
        {
          id: 4,
          title: 'Очищение',
          description: 'От продуктов распада наркотических веществ'
        },
        {
          id: 5,
          title: 'Реабилитация',
          description: 'Избавление от наркомании'
        },
        {
          id: 6,
          title: 'Ресоциализация',
          description: 'Поддержка после выписки - 24/7/365'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.stages-of-treatment {
  margin-top: 50px;

  &__content {
    display: flex;

    &_mt-30 {
      margin-top: 30px;
    }
  }

  &__item {
    //padding: 0 15px;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
    width: 100%;
    position: relative;

    &-body {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto 15px;
      height: 110px;
      width: 110px;
      font-size: 50px;
      position: relative;

      &::before {
        content: '';
        width: 100%;
        height: 100%;
        background-image: url('@/assets/svg/stage-of-treatment-bg.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        position: absolute;
      }

      & > span {
        background: linear-gradient(225deg, #8CEDD9 0%, #0DAACB 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    &-title {
      margin-bottom: 5px;
      min-height: 25px;
      font-weight: 700;
      color: #12404a;
      text-align: center;
    }

    &-description {
      font-size: 15px;
      text-align: center;
    }

    &:not(:last-child) {
      & .stages-of-treatment {
        &__item {
          &-body {
            &::after {
              content: "";
              width: 30px;
              background: linear-gradient(225deg, #8CEDD9 0%, #0DAACB 100%);
              position: absolute;
              height: 1px;
              right: -50px;
            }
          }
        }
      }
    }
  }
}
</style>