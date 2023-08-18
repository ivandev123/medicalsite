<template>
  <div class="how-to-determine">
    <h2 class="how-to-determine__title">Как выявить</h2>

    <div class="how-to-determine__content how-to-determine__content_mt-20">
      <div
          class="how-to-determine__item"
          v-for="(item, idx) in items"
          :key="item.id"
      >
        <div class="how-to-determine__item-num">0{{ idx + 1 }}</div>
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
          name: '<strong>Потеря контроля</strong> количества выпитого алкоголя;'
        },
        {
          id: 2,
          name: '<strong>Утрата рвотного</strong> рефлекса;'
        },
        {
          id: 3,
          name: '<strong>Способность переносить</strong> всё большие дозы спиртного;'
        },
        {
          id: 4,
          name: '<strong>Острая негативная реакция</strong> на любые попытки поговорить о пьянстве.'
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
    display: flex;
    justify-content: space-between;

    &_mt-20 {
      margin-top: 20px;
    }
  }

  &__item {
    width: 24%;
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