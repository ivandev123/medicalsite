<template>
  <section class="index-top-form">
    <div class="container">
      <h1 class="index-top-form__title">
        Наркологическая клиника в
        <span>Ростове-на-Дону</span>
      </h1>

      <div class="index-top-form__subtitle">Медицинские услуги опытных врачей</div>

      <form>
        <p>Получи консультацию <span>бесплатно</span></p>

        <div class="index-top-form__fields">
          <InputText placeholder="Ваше имя" padding="0 25px" height="50px" br="24px"/>
          <InputText placeholder="Ваш телефон" padding="0 25px" height="50px" br="24px" :default-value="form.phone" v-mask="'+7 (###) ###-##-##'"/>
          <Button name="Записаться на приём" bg="orange" width="100%" br="24px" @click="formSent = true"/>
        </div>

        <div class="index-top-form__policy">Даю согласие на обработку персональных данных, с условиями политики конфиденциальности ознакомлен</div>
      </form>
    </div>
  </section>
  <AnnouncementModal v-if="formSent" @close="formSent = false"/>
</template>

<script>
import InputText from "@/components/utils/InputText.vue";
import Button from "@/components/utils/Button.vue";
import {mask} from "vue-the-mask";
import AnnouncementModal from "@/components/modals/AnnouncementModal.vue";

export default {
  name: "IndexTopForm",
  components: {AnnouncementModal, Button, InputText},
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
@import "@/assets/scss/components/home/indexTopForm";
</style>