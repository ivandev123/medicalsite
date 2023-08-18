<template>
  <div class="call-to-action">
    <div class="call-to-action__picture">
      <img src="@/assets/images/call-to-action.webp" alt="image" class="call-to-action__image">
    </div>

    <div class="call-to-action__info">
      <h2 class="call-to-action__title call-to-action__title_mb-8">Нужна помощь</h2>
      <h3 class="call-to-action__subtitle call-to-action__subtitle_mb-40">Бесплатная консультация в день обращения!</h3>
      <Button
          padding="16px 24px"
          font-size="18px"
          name="Записаться на приём"
          @click="showOrderConsultationModal = true"
      />
    </div>
  </div>
  <OrderConsultationModal
      @close="showOrderConsultationModal = false"
      v-if="showOrderConsultationModal"
  />
</template>

<script>
import Button from "@/components/utils/Button.vue";
import OrderConsultationModal from "@/components/modals/OrderConsultationModal.vue";

export default {
  name: "CallToAction",
  components: {OrderConsultationModal, Button},
  data() {
    return {
      showOrderConsultationModal: false,
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/callToAction";
</style>