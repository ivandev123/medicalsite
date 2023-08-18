<template>
  <ModalTemplate body-width="350px" @close="close(null)">
    <template #content>
      <div class="modal__title">Скоро мы с Вами свяжемся</div>
    </template>
  </ModalTemplate>
</template>

<script>
import ModalTemplate from "@/components/modals/ModalTemplate.vue";

export default {
  name: "AnnouncementModal",
  components: {ModalTemplate},
  emits: ['close'],
  methods: {
    close(e) {
      if (!e || e.target.classList.contains('modal') || e.target.hasAttribute('data-close')) {
        document.body.style.overflow = null;
        this.$emit('close')
      }
    },
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/modals/modal";
</style>