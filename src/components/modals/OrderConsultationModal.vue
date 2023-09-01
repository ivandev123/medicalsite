<template>
  <ModalTemplate body-width="475px" v-if="!formSent" @close="close(null)">
    <template #content>
      <div class="modal__title">Заполните форму и мы с Вами свяжемся</div>
      <form class="modal__content modal__content_mt-24" @submit.prevent="sendForm">
        <InputText
            placeholder="Введите имя"
            title="Ваше имя"
            :default-value="form.name"
            @set-value="setName"
        />
        <InputText
            placeholder="+7"
            title="Ваш номер телефона"
            :default-value="form.phone"
            v-mask="'+7 (###) ###-##-##'"
            @set-value="setPhone"
        />

        <div class="modal__buttons modal__buttons_mt-4">
          <Button name="Отмена" bg="orange" color="green" width="100%" @click="close(null)"/>
          <Button type="submit" name="Отправить" width="100%" />
        </div>

        <div class="modal__privacy-policy">
          Нажимая кнопку "отправить", вы соглашаетесь с <a href="#">политикой конфеденциальности</a> данного сайта
        </div>
      </form>
    </template>
  </ModalTemplate>
  <AnnouncementModal @close="close(null)" v-if="formSent"/>
</template>

<script>
import InputText from "@/components/utils/InputText.vue";
import { mask } from 'vue-the-mask';
import Button from "@/components/utils/Button.vue";
import ModalTemplate from "@/components/modals/ModalTemplate.vue";
import AnnouncementModal from "@/components/modals/AnnouncementModal.vue";
import { makeAnAppointment } from "@/api";

export default {
  name: "OrderConsultationModal",
  components: {AnnouncementModal, ModalTemplate, Button, InputText},
  emits: ['close'],
  data() {
    return {
      form: {
        name: '',
        phone: '+7'
      },
      formSent: false,
    }
  },
  methods: {
    setName(name) {
      this.form.name = name
    },
    setPhone(phone) {
      this.form.phone = phone
    },
    sendForm() {
      if (this.form.name && this.form.phone.length > 2) {
        makeAnAppointment(this.form).then(response => {
          console.log('ok', response)
          this.form = { name: '', phone: '+7' }
          this.formSent = true
        })
      }
    },
    close(e) {
      if (!e || e.target.classList.contains('modal') || e.target.hasAttribute('data-close')) {
        document.body.style.overflow = null;
        this.$emit('close')
      }
    },
  },
  directives: { mask }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/modals/modal";

.modal {
  &__title {
    line-height: 21px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
}
</style>