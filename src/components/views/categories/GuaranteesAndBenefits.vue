<template>
  <div class="guarantees-and-benefits">
    <h2 class="guarantees-and-benefits__title">Наши гарантии и преимущества</h2>

    <div class="guarantees-and-benefits__content guarantees-and-benefits__content_mt-30">
      <div
          class="guarantees-and-benefits__item"
          v-for="item in advantages"
          :key="item.id"
      >
        <div class="guarantees-and-benefits__item-body">
          <div class="guarantees-and-benefits__item-icon">
            <img alt="Дипломированные специалисты" loading="lazy" width="40" height="40" :src="item.icon">
<!--            :src="require(`@/assets/svg/guaranteesAndBenefits/${item.id}.svg`)"-->
          </div>
          <div class="guarantees-and-benefits__item-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "GuaranteesAndBenefits",
  data() {
    return {
      data: [
        {
          id: 1,
          title: 'Дипломированные специалисты',
        },
        {
          id: 2,
          title: 'Еженедельные занятия для близких',
        },
        {
          id: 3,
          title: 'Бессрочная поддержка после выписки',
        },
        {
          id: 4,
          title: 'Комфортабельные палаты',
        },
        {
          id: 5,
          title: 'Привозное питание из кафе',
        },
        {
          id: 6,
          title: 'Медицинское сопровождение',
        },
      ]
    }
  },
  methods: {
    ...mapActions('ourAdvantages', ['getAdvantages']),
  },
  computed: {
    ...mapState('ourAdvantages', ['advantages']),
  },
  mounted() {
    this.getAdvantages()
  }
}
</script>

<style scoped lang="scss">
.guarantees-and-benefits {
  margin-top: 50px;

  &__content {
    display: flex;
    flex-wrap: wrap;

    &_mt-30 {
      margin-top: 30px;
    }
  }

  &__item {
    padding: 0 15px;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    width: 100%;
    position: relative;

    &-body {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
    }

    &-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      margin-right: 20px;
      width: 80px;
      height: 80px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url('@/assets/svg/guaranteesAndBenefits/guarantees-and-benefits-bg.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
    }

    &-title {
      margin-bottom: 5px;
      font-weight: 700;
      font-size: 18px;
      color: #12404a;
    }
  }
}
</style>