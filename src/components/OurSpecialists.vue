<script>
import {defineComponent} from 'vue'
import Button from "@/components/utils/Button.vue";
import {mapActions, mapState} from "vuex";
import Preloader from "@/components/Preloader.vue";

export default defineComponent({
  name: "OurSpecialists",
  props: {
    title: {
      type: String,
      default: 'Наши специалисты'
    }
  },
  components: {Preloader, Button},
  methods: {
    ...mapActions('specialists', ['getSpecialists']),
  },
  computed: {
    ...mapState('specialists', ['specialists']),
  },
  mounted() {
    this.getSpecialists()
  }
})
</script>

<template>
  <div class="our-specialists">
    <h2 class="our-specialists__title">{{ title }}</h2>

    <Preloader style="margin-top: 50px;" v-if="!specialists.length"/>
    <div class="our-specialists__content our-specialists__content_mt-50" v-if="specialists.length">
      <div
          class="our-specialists__item"
          v-for="specialist in specialists"
          :key="specialist.id"
      >
        <div class="our-specialists__item-avatar">
          <img alt="specialist" :src="specialist.image">
        </div>

        <div class="our-specialists__item-info">
          <div class="our-specialists__item-fullname">{{ `${specialist.name} ${specialist.surname} ${specialist.patronymic}` }}</div>
          <div class="our-specialists__item-job">{{ specialist.job }}</div>
          <div class="our-specialists__item-experience">
            <div class="our-specialists__item-experience-years">
              <span>Стаж работы</span>
<!--              <span>{{ item.work_experience }}</span>-->
              <span>{{ specialist.work_experience }}</span>
            </div>
            <div/>
            <div class="our-specialists__item-experience-years">
              <span>Стаж в клинике</span>
<!--              <span>{{ item.experience_in_clinic }}</span>-->
              <span>{{ specialist.experience_in_clinic }}</span>
            </div>
          </div>
        </div>
<!--        <Button-->
<!--            class="our-specialists__item-button"-->
<!--            name="Смотреть профиль"-->
<!--            padding="14px 0"-->
<!--            width="100%"-->
<!--            font-size="16px"-->
<!--            @click="$router.push(`/specialist/${specialist.id}`)"-->
<!--        />-->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/components/ourSpecialists";
</style>