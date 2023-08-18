<script>
import {defineComponent} from 'vue'
import Button from "@/components/utils/Button.vue";

export default defineComponent({
  name: "OurSpecialists",
  props: {
    title: {
      type: String,
      default: 'Наши специалисты'
    }
  },
  components: {Button}
})
</script>

<template>
  <div class="our-specialists">
    <h2 class="our-specialists__title">{{ title }}</h2>

    <div class="our-specialists__content our-specialists__content_mt-50">
      <div
          class="our-specialists__item"
          v-for="item in 4"
          :key="item"
      >
        <div class="our-specialists__item-avatar">
          <img src="@/assets/images/specialist.jpg" alt="specialist">
        </div>

        <div class="our-specialists__item-info">
          <div class="our-specialists__item-fullname">Вашкин Дмитрий Владимирович</div>
          <div class="our-specialists__item-job">Главный врач</div>
          <div class="our-specialists__item-experience">
            <div class="our-specialists__item-experience-years">
              <span>Стаж работы</span>
              <span>23 года</span>
            </div>
            <div/>
            <div class="our-specialists__item-experience-years">
              <span>Стаж в клинике</span>
              <span>16 лет</span>
            </div>
          </div>
        </div>
        <Button class="our-specialists__item-button" name="Смотреть профиль" padding="14px 0" width="100%" font-size="16px"/>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/components/ourSpecialists";
</style>