<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "OperatingProcedure",
  data() {
    return {
      procedures: [
        {
          id: 1,
          title: 'Диагностика',
          description: '— важно определить, какие вещества, как давно и в каких количествах принимает пациент. Для выявления имеющихся нейромедиаторных нарушений проводится ДНК-анализ.'
        },
        {
          id: 2,
          title: 'Детоксикация',
          description: 'с помощью капельниц и медикаментов из организма человека выводятся остатки наркотических веществ. Помогаем справиться с абстиненцией.'
        },
        {
          id: 3,
          title: 'Интенсивная терапия',
          description: 'на данном этапе проводится восстановление физического здоровья человека с помощью аппаратных методов лечения, медицинских препаратов, ЛФК, массажей и т. д.'
        },
        {
          id: 4,
          title: 'Реабилитация личности',
          description: 'когда человек смог побороть в себе зависимость и сделал первые успешные шаги к полноценной жизни, мы помогаем ему найти новые цели и увлечения, интересы и сферы деятельности, в которых можно реализовать себя.'
        },
      ]
    }
  }
})
</script>

<template>
  <div class="operating-procedure">
    <h2 class="operating-procedure__title">Как мы работаем</h2>
    <p class="operating-procedure__subtitle operating-procedure__subtitle_mt-20">
      Мы специализируемся на лечении пациентов, зависимых от популярных сегодня эмпатогенов, психостимуляторов и психоделики. Молодые люди ошибочно считают, что такие вещества не вызывают зависимость и от их приема можно в любой момент отказаться самостоятельно. Как показывает практика, полностью восстановиться получается только в условиях специализированного наркологического центра.
    </p>

    <div class="operating-procedure__content">
      <div
          class="operating-procedure__item"
          v-for="procedure in procedures"
          :key="procedure.id"
      >
        <div class="operating-procedure__item-number">01</div>
        <div class="operating-procedure__item-content">
          {{ procedure.title }}
          <span>{{ procedure.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/components/home/operatingProcedure";
</style>