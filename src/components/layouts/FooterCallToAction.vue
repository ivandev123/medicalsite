<template>
  <div class="footer-call-to-action">
    <div class="container">
      <form class="footer-call-to-action__content">
        <h2 class="footer-call-to-action__title">Записаться на консультацию</h2>

        <div class="footer-call-to-action__inputs">
          <InputText placeholder="Ваше имя" padding="10px 30px" height="50px" br="24px"/>
          <InputText placeholder="Ваш телефон" padding="10px 30px" height="50px" br="24px" :default-value="form.phone" v-mask="'+7 (###) ###-##-##'"/>
          <InputText placeholder="Ваша почта" padding="10px 30px" height="50px" br="24px"/>
        </div>
        <MyTextarea style="height: 154px; resize: vertical;" placeholder="Ваш вопрос" class="footer-call-to-action__textarea"/>
        <Button
            class="footer-call-to-action__button"
            name="Отправить"
            padding="16px"
            width="220px"
            br="24px"
            bg="white2"
            font-size="16px"
            @click="formSent = true"
        />
      </form>
    </div>
  </div>
  <AnnouncementModal v-if="formSent" @close="formSent = false"/>
</template>

<script>
import InputText from "@/components/utils/InputText.vue";
import {mask} from "vue-the-mask";
import MyTextarea from "@/components/utils/MyTextarea.vue";
import Button from "@/components/utils/Button.vue";
import AnnouncementModal from "@/components/modals/AnnouncementModal.vue";

export default {
  name: "FooterCallToAction",
  components: {AnnouncementModal, Button, MyTextarea, InputText},
  directives: {mask},
  data() {
    return {
      formSent: false,
      form: {
        name: '',
        phone: '+7'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.footer-call-to-action {
  margin-top: 80px;
  padding: 80px 0;
  background: url('@/assets/images/bottom-form.jpg') center / cover;
  text-align: center;
  color: #FFFFFF;

  &__content {
    padding: 0 15px;
  }

  &__title {
    margin-bottom: 40px;
    font-size: 42px;
  }

  &__inputs {
    display: flex;
    align-items: center;
    column-gap: 3.8%;
  }

  &__textarea {
    margin: 30px 0 50px;
  }

  &__button {
    margin: 0 auto;
  }
}

@media screen and (max-width: 680px) {
  .footer-call-to-action {
    &__inputs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: "name phone" "mail mail";
      gap: 15px;

      & > .input {
        &:nth-child(1) {
          grid-area: name;
        }

        &:nth-child(2) {
          grid-area: phone;
        }

        &:nth-child(3) {
          grid-area: mail;
        }
      }
    }
  }
}

@media screen and (max-width: 460px) {
  .footer-call-to-action {
    &__inputs {
      grid-template-columns: 1fr;
      grid-template-areas: "name name" "phone phone" "mail mail";
    }
  }
}
</style>