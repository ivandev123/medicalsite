<template>
  <Preloader style="margin-top: 20px;" v-if="!stock.id"/>

  <article class="stock-article-top" v-if="stock.id">

    <h1>{{ stock.title }}</h1>

    <div class="stock-article-top__content stock-article-top__content_mt-20">
      <img alt="article image" :src="stock.stock_image">

      <div v-html="stock.content"/>
      <!--      <div class="stock-article-top__info">-->
      <!--        <p>Скидка при прохождении курса лечения в нашей клинике.</p>-->
      <!--        <p>Получите скидку на реабилитацию 10 000 рублей этим летом! Выгодная скидка на вторичную реабилитацию в нашем центре, после полного прохождения <a href="/uslugi-tseny/lechenie-alkogolizma/">курса лечения алкоголизма</a>.</p>-->
      <!--        <p>Удобное расположение, квалифицированный штат специалистов и эффективные методы реабилитации помогут вам избавиться от зависимости! Успейте до конца лета!</p>-->
      <!--        <p>Подробности акции по телефону <a href="tel:88633033580">8 (863) 303-35-80</a> или в чате <a href="https://web.whatsapp.com/send/?phone=79286161265" rel="noindex">WhatsApp</a>.</p>-->
      <!--      </div>-->
    </div>
    <div class="stock-article-top__date stock-article-top__date_mt-10">
      <p><strong>Срок действия акции:</strong></p>

      <div class="stock-article-top__date-content">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 467.029 467.03" style="enable-background:new 0 0 467.029 467.03;" xml:space="preserve">
          <g>
            <path d="M269.873,45.488c0,25.113-20.357,45.487-45.473,45.487c-25.114,0-45.49-20.374-45.49-45.487   C178.91,20.374,199.286,0,224.4,0C249.516,0,269.873,20.374,269.873,45.488z M224.4,412.42c-15.073,0-27.305,12.232-27.305,27.303   c0,15.074,12.232,27.307,27.305,27.307c15.077,0,27.309-12.232,27.309-27.307C251.709,424.653,239.472,412.42,224.4,412.42z    M131.91,82.386c5.777-3.316,7.789-10.779,4.413-16.554c-3.316-5.804-10.749-7.79-16.552-4.441   c-5.778,3.344-7.792,10.75-4.415,16.554C118.674,83.749,126.109,85.762,131.91,82.386z M307.779,387.036   c-14.454,8.383-19.424,26.948-11.075,41.435c8.354,14.515,26.953,19.452,41.402,11.104c14.51-8.378,19.484-26.92,11.136-41.435   C340.827,383.662,322.294,378.687,307.779,387.036z M46.12,157.167c7.225,4.174,16.521,1.687,20.701-5.54   c4.175-7.253,1.685-16.524-5.54-20.729c-7.257-4.146-16.524-1.689-20.731,5.568C36.373,143.72,38.862,152.989,46.12,157.167z    M411.79,312.289c-15.934-9.213-36.366-3.762-45.551,12.199c-9.236,15.938-3.79,36.343,12.204,45.551   c15.934,9.213,36.366,3.767,45.546-12.204C433.17,341.877,427.719,321.497,411.79,312.289z M45.466,242.609   c0-10.044-8.146-18.188-18.183-18.188c-10.041,0-18.183,8.144-18.183,18.188c0,10.034,8.142,18.178,18.183,18.178   C37.353,260.787,45.466,252.643,45.466,242.609z M421.502,206.208c-20.077,0-36.37,16.318-36.37,36.401   c0,20.073,16.293,36.389,36.37,36.389c20.078,0,36.427-16.315,36.427-36.389C457.868,222.496,441.58,206.208,421.502,206.208z    M43.098,322.77c-10.158,5.867-13.656,18.865-7.789,28.997c5.862,10.16,18.864,13.623,28.994,7.757   c10.158-5.834,13.621-18.832,7.759-28.959C66.195,320.405,53.226,316.904,43.098,322.77z M414.81,178.164   c18.896-10.867,25.291-35.006,14.449-53.842c-10.958-18.832-35.003-25.291-53.9-14.394c-18.831,10.872-25.286,35.006-14.393,53.842   C371.868,182.606,395.974,189.061,414.81,178.164z M137.982,392.305c-11.607-6.721-26.474-2.749-33.167,8.891   c-6.665,11.579-2.695,26.444,8.884,33.108c11.609,6.688,26.476,2.726,33.169-8.854   C153.561,413.839,149.591,399.002,137.982,392.305z M344.206,35.12c-20.372-11.696-46.32-4.737-57.988,15.551   c-11.724,20.286-4.793,46.288,15.522,58.014c20.255,11.667,46.26,4.739,57.983-15.577C371.452,72.82,364.466,46.851,344.206,35.12z    M239.561,251.369V121.302h-30.324v112.537l-97.462,56.294l15.161,26.238L239.561,251.369z" fill="#FFA765"/>
          </g>
          <g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/>
      </svg>
        <time>{{ getDate(stock.start_stock) }} — {{ getDate(stock.end_stock) }}</time>
      </div>
    </div>
  </article>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Preloader from "@/components/Preloader.vue";

export default {
  name: "StockArticleTop",
  components: {Preloader},
  methods: {
    ...mapActions('stocks', ['getStock']),

    getDate(date) {
      return date
          ?.split('-')
          .reverse()
          .join('.')
    }
  },
  computed: {
    ...mapState('stocks', ['stock']),
  },
  mounted() {
    this.getStock(+this.$route.params.id)
  }
}
</script>

<style scoped lang="scss">
.stock-article-top {
  display: flex;
  flex-direction: column;

  &__content {
    &_mt-20 {
      margin-top: 20px;
    }

    & > img {
      margin: 0 20px 20px 0;
      border-radius: 20px;
      float: left;
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    row-gap: 26px;

    & > p {
      line-height: 26px;

      & > a {
        font-size: 16px;
        font-weight: normal;
        line-height: 26px;
        text-decoration: underline;
        color: #FFA765;
        transition: .25s all ease;

        &:hover {
          color: #FF6100;
        }
      }
    }
  }

  &__date {
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    &-content {
      display: flex;
      align-items: center;
      column-gap: 8px;
      font-size: 16px;
      line-height: 1.5;
    }

    &_mt-10 {
      margin-top: 10px;
    }
  }
}
</style>