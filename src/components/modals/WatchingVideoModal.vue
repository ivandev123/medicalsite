<template>
  <ModalTemplate body-width="95vw" @close="close(null)">
    <template #content>
      <div class="modal__video" v-html="video"/>
    </template>
  </ModalTemplate>
</template>

<script>
import ModalTemplate from "@/components/modals/ModalTemplate.vue";

export default {
  name: "WatchingVideoModal",
  components: {ModalTemplate},
  emits: ['close'],
  props: ['video'],
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
.modal {
  &__video {
    & ::v-deep {
      & iframe {
        padding: 10px;
        width: 100%;
        height: 87vh;
      }
    }
  }
}
</style>