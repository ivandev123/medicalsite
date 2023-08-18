<template>
  <div class="our-programs">
    <h2 class="our-programs__title">Наши программы</h2>

    <div class="our-programs__content our-programs__content_mt-25">
      <div
          class="our-programs__item"
          v-for="program in programs"
          :key="program.id"
      >
        <h3 class="our-programs__item-title">{{ program.title }}</h3>
        <p class="our-programs__item-description our-programs__item-description_mt-10">{{ program.description }}</p>

        <div class="our-programs__item-info">
          <div class="our-programs__item-price">
            от {{ program.price }} ₽
            <sup v-if="program.time"> / {{ program.time }}</sup>
          </div>
          <div class="our-programs__item-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
              <path d="m16.434 14.148-3.744-2.685a.529.529 0 0 0-.589-.018L10 12.76c-.404.122-2.285-1.012-3.82-2.88-.98-1.195-1.03-1.784-.989-1.865l1.34-2.142a.53.53 0 0 0-.02-.59L3.827 1.54a.53.53 0 0 0-.387-.219.558.558 0 0 0-.417.154L1.09 3.407C-.004 4.5-.309 6.167.332 7.553c1.482 3.205 4.445 7.565 10.14 10.138 1.362.615 2.998.291 4.077-.788l1.951-1.95a.53.53 0 0 0-.066-.805ZM15.352 0h-4.235a2.65 2.65 0 0 0-2.648 2.647v2.118c0 1.279.911 2.348 2.118 2.594v1.112a.53.53 0 0 0 .847.424l1.977-1.483h1.941A2.65 2.65 0 0 0 18 4.765V2.647A2.65 2.65 0 0 0 15.352 0Zm-4.235 4.236a.53.53 0 1 1 0-1.06.53.53 0 0 1 0 1.06Zm2.117 0a.53.53 0 1 1 0-1.06.53.53 0 0 1 0 1.06Zm2.118 0a.53.53 0 1 1 0-1.06.53.53 0 0 1 0 1.06Z" fill="url(#a)"/>
              <defs>
                <linearGradient id="a" x1="-5.815" y1="-16.877" x2="26.265" y2="6.594" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFDBDB"/>
                  <stop offset="1" stop-color="#fff"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurPrograms",
  data() {
    return {
      programs: [
        {
          id: 1,
          title: 'Курсовое лечение',
          description: 'Лекарственные препараты, психотерапия, плазмаферез, электросон для 100% освобождения от зависимости. Курс от 28 дней.',
          price: 1700,
          time: 'сутки'
        },
        {
          id: 2,
          title: 'Кодирование',
          description: 'Формируем отвращение к алкоголю на подсознательном уровне. Достаточно не пить 1 день. Процедура длится не более 2 часов. ',
          price: 1700,
          time: ''
        },
        {
          id: 3,
          title: 'Вывод из запоя',
          description: 'Временное решение проблем с алкоголем. Останавливаем запой с первой процедуры. Возвращаем хорошее самочувствие за 1-3 дня.',
          price: 1700,
          time: ''
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.our-programs {
  margin-top: 50px;

  &__content {
    display: flex;
    column-gap: 30px;
    flex-wrap: wrap;

    &_mt-25 {
      margin-top: 25px;
    }
  }

  &__item {
    padding: 25px;
    width: 31.4%;
    border-radius: 20px;
    background: #FFFFFF;

    &-title {

    }

    &-description {
      font-size: 15px;
      min-height: 120px;

      &_mt-10 {
        margin-top: 10px;
      }
    }

    &-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-price {
      height: fit-content;
      font-size: 32px;
      font-weight: 700;

      & > sup {
        font-size: 15px;
      }
    }

    &-image {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #24c8bc;
      vertical-align: center;
      float: right;
      cursor: pointer;
    }
  }
}
</style>