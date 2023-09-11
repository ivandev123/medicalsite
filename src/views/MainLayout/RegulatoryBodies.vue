<template>
  <div class="regulatory-bodies">
    <div class="container">
      <h1>Контролирующие органы</h1>

      <Preloader style="margin-top: 20px;" v-if="!regulatoryBodies.content"/>
      <div class="regulatory-bodies__content regulatory-bodies__content_mt-20" v-if="regulatoryBodies.content">
<!--          <p>Министерство здравоохранения Ростовской области: адрес: 344029, г. Ростов-на-Дону, ул Конной Армии, 33, тел.: 8 (863)263-20-50</p>-->
<!--          <p>Территориальный орган Федеральной службы по надзору в сфере здравоохранения (Росдравнадзора) по Ростовской области: адрес: г.Ростов-на-Дону, ул. Ченцова, 71/63 Б , телефон 8 (863) 286-98-169.</p>-->
<!--          <p>Управление Федеральной службы по надзору в сфере защиты прав потребителей и благополучия человека по Ростовской области: адрес: 344019, г.Ростов-на-Дону, ул. 18 линия, д. 17, телефон 8 (863) 251-05-92.</p>-->
<!--          <ul>-->
<!--            <li><a href="#">Информирование граждан</a></li>-->
<!--          </ul>-->
        <div v-html="regulatoryBodies.content"/>
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "RegulatoryBodies",
  components: {Preloader},
  methods: {
    ...mapActions('regulatoryBodies', ['getRegulatoryBodies']),
  },
  computed: {
    ...mapState('regulatoryBodies', ['regulatoryBodies']),
  },
  mounted() {
    this.getRegulatoryBodies()
  }
}
</script>

<style scoped lang="scss">
.regulatory-bodies {
  padding-bottom: 50px;

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    &_mt-20 {
      margin-top: 20px;
    }

    & > p {
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
    }

    & > ul {
      list-style: none;

      & > li {
        &:before {
          content: '';
          display: inline-block;
          margin-right: 10px;
          width: 12px;
          height: 3px;
          background: #FFA765;
          vertical-align: middle;
        }

        & > a {
          font-size: 16px;
          font-weight: normal;
          line-height: 26px;
          text-decoration: underline;
          color: #FFA765;
          transition: all .35s ease;

          &:hover {
            color: #FF6100;
          }
        }
      }
    }
  }
}
</style>