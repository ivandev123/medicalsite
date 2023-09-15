<script>
import {defineComponent} from 'vue'
import Preloader from "@/components/Preloader.vue";
import {mapActions, mapState} from "vuex";

export default defineComponent({
  name: "OperatingProcedure",
  components: {Preloader},
  methods: {
    ...mapActions('howItWork', ['getHowItWork']),
  },
  computed: {
    ...mapState('howItWork', ['howItWork']),
  },
  mounted() {
    this.getHowItWork()
  }
})
</script>

<template>
  <div class="operating-procedure">
    <h2 class="operating-procedure__title">Как мы работаем</h2>
    <p class="operating-procedure__subtitle operating-procedure__subtitle_mt-20">
      Мы специализируемся на лечении пациентов, зависимых от популярных сегодня эмпатогенов, психостимуляторов и психоделики. Молодые люди ошибочно считают, что такие вещества не вызывают зависимость и от их приема можно в любой момент отказаться самостоятельно. Как показывает практика, полностью восстановиться получается только в условиях специализированного наркологического центра.
    </p>

    <Preloader style="margin-top: 30px;" v-if="!howItWork.length"/>
    <div class="operating-procedure__content operating-procedure__content_mt-30" v-if="howItWork.length">
      <div
          class="operating-procedure__item"
          v-for="(procedure, idx) in howItWork"
          :key="procedure.id"
      >
        <div class="operating-procedure__item-number">{{ idx + 1 < 10 ? `0${idx + 1}` : idx + 1 }}</div>
        <div class="operating-procedure__item-content">
          {{ procedure.title }}
          <span>{{ procedure.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/components/home/operatingProcedure";
</style>