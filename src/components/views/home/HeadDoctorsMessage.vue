<script>
import {defineComponent} from 'vue'
import Button from "@/components/utils/Button.vue";
import OrderConsultationModal from "@/components/modals/OrderConsultationModal.vue";
import Preloader from "@/components/Preloader.vue";
import {mapActions, mapState} from "vuex";

export default defineComponent({
  name: "HeadDoctorsMessage",
  components: {Preloader, OrderConsultationModal, Button},
  data() {
    return {
      showOrderConsultationModal: false,
    }
  },
  methods: {
    ...mapActions('appeal', ['getAppeal']),
  },
  computed: {
    ...mapState('appeal', ['appeal']),

    getName() {
      return this.appeal.fullname?.split(' ')
    }
  },
  mounted() {
    this.getAppeal()
  }
})
</script>

<template>
  <div class="head-doctors-message">
<!--    <Preloader/>-->
    <template v-if="true">
      <div class="head-doctors-message__left">
        <h2 class="head-doctors-message__title head-doctors-message__title_mb-15">
          <span>{{ getName?.[0] }}</span>
          <span>
          {{ getName?.splice(1).join(' ') }}
          <Button name="Записаться на консультацию" @click="showOrderConsultationModal = true"/>
        </span>
        </h2>
        <div class="head-doctors-message__subtitle">Главный врач</div>

        <div class="head-doctors-message__content">
          <div class="head-doctors-message__picture top">
            <img alt="Главврач" :src="appeal.image">
          </div>
          <div class="head-doctors-message__text" v-html="appeal.content"/>
          <!--            <p>Химическая зависимость — это тяжелая смертельная болезнь. Каждый день употребления наркотиков приближает человека к критической черте.</p>-->
          <!--            <p>К сожалению, на дому вылечить зависимость невозможно. Также не существует «волшебной таблетки», после которой больной резко исцелится. Если вы хотите помочь близкому в беде, не тратьте драгоценное время на сомнительные советы из интернета и на шарлатанов!</p>-->
          <!--            <p>Мы придерживаемся простого взгляда: медицинская помощь должна быть профессиональной. Индивидуальный подход, комплексная терапия и бережная психологическая поддержка — <span>вот надежный путь к выздоровлению!</span></p>-->
        </div>
      </div>
      <div class="head-doctors-message__picture right">
        <img alt="Главврач" :src="appeal.image">
      </div>
    </template>
  </div>
  <OrderConsultationModal
      @close="showOrderConsultationModal = false"
      v-if="showOrderConsultationModal"
  />
</template>

<style scoped lang="scss">
@import "@/assets/scss/components/home/headDoctorsMessage";
</style>