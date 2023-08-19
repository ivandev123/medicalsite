<template>
  <div class="text-review">
    <div class="text-review__info">
      <div class="text-review__name">Елена</div>
      <div class="text-review__date">22 марта 2022</div>
    </div>

    <p class="text-review__text">
      Меня зовут Елена. Я — зависимая. Если бы кто-то сказал мне много лет назад, что я зависимая, то я восприняла бы это как приговор.
      Сегодня я понимаю, что с этим можно жить.
      И не просто влачить свое жалкое существование, постоянно в чем-то себя ограничивая, а жить в полном смысле этого слова.
      Жить и радоваться жизни, ничего не употребляя, оставаясь счастливым, радостным и свободным человеком.
    </p>
  </div>
</template>

<script>
export default {
  name: "TextReview"
}
</script>

<style scoped lang="scss">
.text-review {
  padding: 32px 32px;
  border-radius: 8px;
  background: linear-gradient(180deg, #FFFFFF 10.26%, rgba(255, 255, 255, 0) 100%);

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__name {
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;
    color: #211E1C;
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      height: 4px;
      width: 32px;
      background-color: #24c8bc;
      transform: rotate(-90deg);
      position: absolute;
      left: -12px;
    }
  }

  &__date {
    font-weight: 400;
    font-size: 15px;
    line-height: 32px;
    color: #595450;
  }

  &__text {
    margin: 16px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #211E1C;
  }
}
</style>