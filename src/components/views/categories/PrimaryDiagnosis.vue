<template>
  <div class="primary-diagnosis">
    <h2 class="primary-diagnosis__title primary-diagnosis__title_mb-20">Первичная диагностика</h2>

    <p>
      В отличие от других наркологических медцентров, часто не учитывающих возрастные,
      физиологические и психосоматические нюансы и предлагающих шаблонные услуг лечения алкоголизма,
      врачи нашей клиники подходят индивидуально к каждому больному. Диагностика начинается с ДНК-анализа в генетической лаборатории,
      что позволяет подобрать для пациента персонализированную стратегию терапии.
    </p>

    <p style="font-weight: bold;">Генетический анализ у больных алкоголизмом рекомендован Минздравом РФ и оценивает:</p>

    <div class="primary-diagnosis__content">
      <ul class="primary-diagnosis__list">
        <li>Индивидуальную сигнатуру нейромедиаторного баланса, дефекты которого вызывают психоэмоциональные нарушения;</li>
        <li>Реакцию клеток и тканей организма на различные лекарственные средства;</li>
        <li>Степень индивидуальной устойчивости центральной нервной системы, сердца, печени, ЖКТ, поджелудочной железы и других органов пациента.</li>
      </ul>
      <div class="primary-diagnosis__text">
        Кроме исследования профиля ДНК первичная диагностика включает комплексное медико-психологическое обследование:
        клинические анализы, оценку титров метаболитов, кардиоскрининг, ультразвуковое исследование, консультации с терапевтом, психологом и наркологом.
        Лабораторные биомаркеры на спиртное являются важным критерием при постановке дифференциального диагноза.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrimaryDiagnosis"
}
</script>

<style scoped lang="scss">
.primary-diagnosis {
  margin-top: 25px;

  &__title {
    &_mb-20 {
      margin-bottom: 20px;
    }
  }

  & > p {
    margin-bottom: 25px;
    font-size: 16px;
    line-height: 29px;
    color: #333333;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__list {
    width: 55%;
    background: rgba(255, 167, 101, .05);
    border-radius: 10px;
    padding: 20px;

    & > li {
      font-weight: 400;
      font-size: 15px;
      line-height: 27px;
      color: #262626;

      &:before {
        content: '';
        display: inline-block;
        margin-right: 7px;
        width: 6px;
        height: 6px;
        background: #FFA765;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
  }

  &__text {
    width: 42.5%;
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
    color: #262626;
  }
}
</style>