<template>
  <div class="seo-text">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
      <path d="M13.636 26.666v-9.29l-8.02 4.648-1.37-2.38 8.02-4.641-8.02-4.642 1.37-2.38 8.02 4.648V3.333h2.728v9.296L24.39 7.98l1.364 2.38-8.02 4.642 8.02 4.642-1.364 2.38-8.026-4.648v9.29h-2.728Z" fill="#FFA765"/>
      <path d="M11.772 0a.804.804 0 0 0-.807.79v7.372L4.437 4.476a.817.817 0 0 0-1.102.29L.108 10.234a.79.79 0 0 0 .296 1.078L6.93 15 .404 18.687a.78.78 0 0 0-.296 1.078l3.228 5.47a.824.824 0 0 0 1.102.289l6.526-3.687v7.374c0 .436.362.789.808.789h6.455a.782.782 0 0 0 .807-.79v-7.373l6.527 3.687a.817.817 0 0 0 1.102-.29l3.228-5.469a.78.78 0 0 0-.296-1.078L23.07 15l6.526-3.687a.78.78 0 0 0 .296-1.078l-3.228-5.47c-.236-.408-.744-.491-1.102-.289l-6.528 3.686.001-7.372a.798.798 0 0 0-.807-.79h-6.455Zm5.648 1.578V9.53c0 .622.7.972 1.21.684l7.039-3.976 2.42 4.103-7.038 3.975a.781.781 0 0 0 0 1.368l7.038 3.975-2.42 4.103-7.039-3.976a.803.803 0 0 0-1.21.683v7.951h-4.842v-7.95c0-.64-.699-.973-1.21-.684L4.33 23.762l-2.421-4.103 7.038-3.975a.785.785 0 0 0 0-1.368L1.91 10.34l2.42-4.102 7.039 3.975a.803.803 0 0 0 1.21-.683V1.578h4.842Z" fill="#FFA765"/>
    </svg>

    <div class="seo-text__content seo-text__content_mt-40">
      <div class="seo-text__right-image">
        <img alt="image" loading="lazy" :src="seo.image">
<!--        src="@/assets/images/seo-text-image.jpg"-->
      </div>
      <div v-html="seo.content"></div>
<!--      <p>-->
<!--        Вызов неотложки всегда сопряжен с экстренными ситуациями. Ухудшение самочувствия близкого-->
<!--        человека заставляет искать любые пути для стабилизации его состояния. Если ждать государственную-->
<!--        службу времени нет, частная скорая помощь прибудет на вызов вскоре после оформления заявки. Наши-->
<!--        врачи ведут круглосуточное дежурство в Ростове-на-Дону, а машины курсируют по главным-->
<!--        магистралям города.-->
<!--      </p>-->

<!--      <div class="seo-text__attention">-->
<!--        <p>-->
<!--          <em>-->
<!--            Позвоните на телефон для получения бесплатной консультации-->
<!--            <a href="tel:88633033580">8 (863) 303-35-80</a>-->
<!--          </em>-->
<!--        </p>-->
<!--      </div>-->

<!--      <p>-->
<!--        Опытные наркологи прибудут по вашему адресу, чтобы помочь больному прийти в себя. Устранив-->
<!--        опасность, наши доктора оставят вам рекомендации и необходимые лекарственные средства на первое-->
<!--        время. Мы гарантируем высокое качество услуг, оперативность действий и профессионализм-->
<!--        врачебного состава.-->
<!--      </p>-->

<!--      <h2>В каких ситуациях платная скорая помощь необходима</h2>-->

<!--      <p>Организация платной скорой помощи на дому в привычных для пациента условиях ведется в-->
<!--        <strong>следующих случаях:</strong>-->
<!--      </p>-->

<!--      <ul>-->
<!--        <li>-->
<!--          необходим <a href="#">вывод из запоя</a>,-->
<!--          когда злоупотребление спиртными напитками идет на протяжении нескольких дней или недель без остановки;-->
<!--        </li>-->
<!--        <li>-->
<!--          требуется <a href="#">снятие интоксикации организма</a>-->
<!--          после отравления суррогатами, устранение симптомов тяжелого похмелья;-->
<!--        </li>-->
<!--        <li>-->
<!--          нужно провести смягчение признаков «ломки», проявлений абстинентного синдрома, возникающего при нехватке очередной дозы алкоголя или наркотиков.-->
<!--        </li>-->
<!--      </ul>-->

<!--      <p>-->
<!--        Платная скорая помощь приезжает на вызов к лицам с алкогольной и наркотической зависимостью.-->
<!--        Мы проводим весь комплекс мероприятий на дому, а при необходимости госпитализируем больного в-->
<!--        клинику. Наши машины не содержат никаких опознавательных знаков, которые могут негативно-->
<!--        сказаться на репутации обслуживаемых нами пациентов. Услуги предоставляются-->
<!--        <strong>анонимно</strong>. Это значит, что пациент может не предъявлять документы, удостоверяющие его личность.-->
<!--      </p>-->

<!--      <h2>Частная скорая помощь в Ростове-на-Дону: какие виды услуг мы предоставляем</h2>-->
<!--      <p>-->
<!--        Вызывать коммерческую скорую помощь рекомендуется для облегчения состояния больного. Работа-->
<!--        платных врачей ведется круглосуточно. Наша компания предлагает не только меры экстренного-->
<!--        реагирования, но и комплексные программы лечения алкоголизма, наркомании и других видов-->
<!--        зависимостей. Цены на услуги указаны в прайсе, уточнить их можно у консультанта по телефону-->
<!--        единой диспетчерской службы.-->
<!--      </p>-->
<!--      <p>-->
<!--        По отзывам наших пациентов, медицинская помощь на дому помогает вернуть сознание человеку,-->
<!--        принимающему алкоголь или наркотики. Во многих ситуациях после беседы нарколога зависимые сами-->
<!--        решают пройти кодирование или полноценную реабилитацию, которые помогают избавиться от тяги к-->
<!--        запрещенным стимуляторам.-->
<!--      </p>-->
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "SEOText",
  methods: {
    ...mapActions('seo', ['getSeo']),
  },
  computed: {
    ...mapState('seo', ['seo']),
  },
  mounted() {
    this.getSeo()
  }
}
</script>

<style scoped lang="scss">
.seo-text {
  margin-top: 80px;

  &__right-image {
    float: right;
    position: relative;

    &::before {
      content: '';
      width: 23%;
      height: 80%;
      border-radius: 0 40px;
      background: #ff954b;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
    }

    & > img {
      margin: 20px 20px 40px 14px;
      max-width: 426px;
      width: 100%;
      border-radius: 0 40px;
      position: relative;
      z-index: 2;
    }
  }

  &__content {
    min-height: 380px;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;

    &_mt-40 {
      margin-top: 40px;
    }

    & ::v-deep {
      & p {
        margin-bottom: 26px;
        font-weight: normal;
        line-height: 26px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      & a {
        font-size: 16px;
        font-weight: normal;
        line-height: 26px;
        text-decoration: underline;
        color: #FFA765;

        &:hover {
          color: #ff954b;
        }
      }

      & h1, h2, h3, h4, h5, h6 {
        margin-bottom: 1rem;
      }

      & ul {
        list-style: none;
        margin: 20px 0 24px;

        & > li {
          margin-bottom: 15px;
          font-size: 16px;
          font-weight: normal;
          line-height: 26px;
          position: relative;

          &::before {
            display: inline-block;
            content: '';
            margin-right: 12px;
            width: 12px;
            height: 3px;
            background-color: #FFA765;
            vertical-align: middle;
            position: relative;
            top: -2px;
            left: 0;
          }
        }
      }
    }
  }

  &__attention {
    display: grid;
    margin-bottom: 26px;
    padding: 20px 94px 20px 104px;
    border: 6px solid rgba(255, 167, 101, .2);
    background: rgba(255, 167, 101, .1);

    font-size: 20px;
    font-weight: bold;
    line-height: 32px;
    color: #FFA765;
    position: relative;

    &::before {
      content: '';
      width: 54px;
      height: 54px;
      transform: translateY(-50%);
      border-radius: 50%;
      background-color: #FFA765;
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 30px;
    }

    &::after {
      content: '';
      width: 24px;
      height: 24px;
      background-image: url('@/assets/svg/phone.svg');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100% auto;
      transform: translateY(-50%);
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 44.85px;
    }

    & p {
      margin-bottom: 0;
      font-weight: bold;
      font-size: 20px;
    }

    & a {
      font-size: 22px;
      font-weight: bold;
      line-height: 32px;
      text-decoration: underline;
      color: #FFA765;
      transition: all .35s ease;

      &:hover {
        color: #ff954b;
      }
    }
  }
}

@media screen and (max-width: 1037px) {
  .seo-text {
    &__attention {
      padding: 20px 15px 20px 94px;

      &::before {
        left: 20px;
      }

      &::after {
        left: 34.85px;
      }

      & a {
        display: block;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .seo-text {
    &__right {
      &-image {
        float: unset;

        &::before {
          top: -20px;
          right: 60px;
          //left: 275px;
        }

        & > img {
          margin: 20px 80px 40px auto;
        }
      }
    }
  }
}

@media screen and (max-width: 536px) {
  .seo-text {
    &__right {
      &-image {
        &::before {
          right: 0;
        }

        & > img {
          margin: 20px 20px 40px auto;
        }
      }
    }
  }
}

@media screen and (max-width: 475px) {
  .seo-text {
    &__right {
      &-image {
        & > img {
          width: 93.5%;
        }
      }
    }
  }
}

@media screen and (max-width: 404px) {
  .seo-text {
    &__attention {
      padding: 20px 15px 20px 25px;

      &::before,
      &::after {
        transform: unset;
        top: unset;
        left: unset;
      }

      &::before {
        bottom: 15px;
        right: 15px;
      }

      &::after {
        bottom: 30px;
        right: 30px;
      }
    }
  }
}
</style>