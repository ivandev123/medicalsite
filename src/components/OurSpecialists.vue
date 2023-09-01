<script>
import {defineComponent} from 'vue'
import Button from "@/components/utils/Button.vue";
import {mapState} from "vuex";

export default defineComponent({
  name: "OurSpecialists",
  props: {
    title: {
      type: String,
      default: 'Наши специалисты'
    }
  },
  components: {Button},
  computed: {
    ...mapState('specialists', ['specialists']),
  },
  mounted() {
    if (!this.specialists.length) this.$store.dispatch('specialists/getSpecialists')
  }
})
</script>

<template>
  <div class="our-specialists">
    <h2 class="our-specialists__title">{{ title }}</h2>

    <div class="our-specialists__content our-specialists__content_mt-50">
      <div
          class="our-specialists__item"
          v-for="item in specialists.splice(0, 4)"
          :key="item"
      >
        <div class="our-specialists__item-avatar">
          <img alt="specialist" :src="item.image">
        </div>

        <div class="our-specialists__item-info">
          <div class="our-specialists__item-fullname">{{ `${item.name} ${item.surname} ${item.patronymic}` }}</div>
          <div class="our-specialists__item-job">{{ item.job }}</div>
          <div class="our-specialists__item-experience">
            <div class="our-specialists__item-experience-years">
              <span>Стаж работы</span>
              <span>{{ item.work_experience }}</span>
            </div>
            <div/>
            <div class="our-specialists__item-experience-years">
              <span>Стаж в клинике</span>
              <span>{{ item.experience_in_clinic }}</span>
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