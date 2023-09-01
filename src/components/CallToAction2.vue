<template>
  <div class="call-to-action2">
    <div class="call-to-action2__left">
      <div class="call-to-action2__title call-to-action2__title_mb-8">
        Опытные специалисты нашей клиники помогут найти решение именно в вашей ситуации
      </div>
      <p class="call-to-action2__subtitle call-to-action2__subtitle_mb-16">обратитесь прямо сейчас!</p>
      <Button
          name="Записаться на консультацию"
          padding="16px 24px"
          font-size="18px"
          @click="showOrderConsultationModal = true"
      />
    </div>
    <div class="call-to-action2__picture">
      <img src="@/assets/images/call-to-action2.webp" alt="image" class="call-to-action2__image">
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
  name: "CallToAction2",
  components: {OrderConsultationModal, Button},
  data() {
    return {
      showOrderConsultationModal: false,
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/callToAction2";
</style>