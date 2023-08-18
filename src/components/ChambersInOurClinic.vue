<template>
  <div class="chambers-in-our-clinic">
    <h2 class="chambers-in-our-clinic__title">
      Палаты в нашей клинике
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
        <path d="M13.636 26.666v-9.29l-8.02 4.648-1.37-2.38 8.02-4.641-8.02-4.642 1.37-2.38 8.02 4.648V3.333h2.728v9.296L24.39 7.98l1.364 2.38-8.02 4.642 8.02 4.642-1.364 2.38-8.026-4.648v9.29h-2.728Z" fill="#24C8BC"></path>
        <path d="M11.772 0a.804.804 0 0 0-.807.79v7.372L4.437 4.476a.817.817 0 0 0-1.102.29L.108 10.234a.79.79 0 0 0 .296 1.078L6.93 15 .404 18.687a.78.78 0 0 0-.296 1.078l3.228 5.47a.824.824 0 0 0 1.102.289l6.526-3.687v7.374c0 .436.362.789.808.789h6.455a.782.782 0 0 0 .807-.79v-7.373l6.527 3.687a.817.817 0 0 0 1.102-.29l3.228-5.469a.78.78 0 0 0-.296-1.078L23.07 15l6.526-3.687a.78.78 0 0 0 .296-1.078l-3.228-5.47c-.236-.408-.744-.491-1.102-.289l-6.528 3.686.001-7.372a.798.798 0 0 0-.807-.79h-6.455Zm5.648 1.578V9.53c0 .622.7.972 1.21.684l7.039-3.976 2.42 4.103-7.038 3.975a.781.781 0 0 0 0 1.368l7.038 3.975-2.42 4.103-7.039-3.976a.803.803 0 0 0-1.21.683v7.951h-4.842v-7.95c0-.64-.699-.973-1.21-.684L4.33 23.762l-2.421-4.103 7.038-3.975a.785.785 0 0 0 0-1.368L1.91 10.34l2.42-4.102 7.039 3.975a.803.803 0 0 0 1.21-.683V1.578h4.842Z" fill="#24C8BC"></path>
      </svg>
    </h2>

    <div class="chambers-in-our-clinic__content chambers-in-our-clinic__content_mt-30">
      <div
          class="chambers-in-our-clinic__item"
          v-for="item in 3"
          :key="item"
      >
        <div class="chambers-in-our-clinic__item-image" @click="openImg">
          <img src="@/assets/images/our-service.jpg" alt="image">
        </div>

        <div class="chambers-in-our-clinic__item-info">
          <div class="chambers-in-our-clinic__item-title">Палата Стандарт</div>
          <p class="chambers-in-our-clinic__item-description">
            Проживание, питание, круглосуточное наблюдение, улучшенное лечение
          </p>

          <ul class="chambers-in-our-clinic__item-list chambers-in-our-clinic__list_mb-20">
            <li>Осмотр и диагностика</li>
            <li>Препараты, выводящие токсины из организма</li>
            <li>Успокоительные</li>
            <li>Противорвотные</li>
            <li>Витамины</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChambersInOurClinic",
  methods: {
    openImg() {
      window.open('/img/our-service.347c4a7a.jpg', "_blank")
    }
  }
}
</script>

<style scoped lang="scss">
.chambers-in-our-clinic {
  margin-top: 50px;

  &__title {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }

  &__content {
    display: flex;
    gap: 30px;

    &_mt-30 {
      margin-top: 30px;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(237, 238, 240, .8);
    background-color: #fff;

    &-image {
      cursor: pointer;
      position: relative;

      &::before {
        content: '';
        width: 100%;
        height: 100%;
        opacity: 0;
        background-color: rgba(246, 247, 250, .8);
        visibility: hidden;
        transition: all .3s ease;
        position: absolute;
        inset: 0;
        z-index: 2;
      }

      &::after {
        content: '';
        width: 60px;
        height: 60px;
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
        background-image: url('@/assets/svg/loop.svg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% auto;
        transition: all .3s ease;
        visibility: hidden;
        position: absolute;
        z-index: 3;
        top: 50%;
        left: 50%;
      }

      &:hover {
        &::before,
        &::after {
          visibility: visible;
          opacity: 1;
        }

        &::after {
          transform: translate(-50%, -50%) scale(1);
        }
      }

      & > img {
        border-radius: 20px 20px 0 0;
        aspect-ratio: 700 / 438;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      padding: 30px 25px 40px;
      height: 100%;
    }

    &-title {
      font-size: 22px;
      font-weight: 800;
      line-height: 22px;
      margin-bottom: 20px;
      text-transform: uppercase;
      color: #FFA765;
      text-align: center;
    }

    &-description {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 20px;
      color: #282828;
    }

    &-list {
      &_mb-20 {
        margin-bottom: 20px;
      }

      & > li {
        margin-bottom: 5px;
        max-width: 233px;
        font-size: 14px;
        font-weight: normal;
        line-height: 24px;
        position: relative;

        &::before {
          content: '';
          display: inline-block;
          margin-right: 10px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #FFA765;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>