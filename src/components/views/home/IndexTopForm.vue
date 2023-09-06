<template>
  <section class="index-top-form">
    <div class="container">
      <h1 class="index-top-form__title">
        Наркологическая клиника в
        <span>Ростове-на-Дону</span>
      </h1>

      <h2 class="index-top-form__subtitle">Медицинские услуги опытных врачей</h2>

      <form>
        <h2>Получи консультацию <span>бесплатно</span></h2>

        <div class="index-top-form__fields">
          <InputText
              style="grid-area: name;"
              placeholder="Ваше имя"
              padding="0 25px"
              height="50px"
              br="24px"
              :default-value="form.name"
              @set-value="setName"
          />
          <InputText
              style="grid-area: phone;"
              placeholder="Ваш телефон"
              padding="0 25px"
              height="50px"
              br="24px"
              :default-value="form.phone"
              v-mask="'+7 (###) ###-##-##'"
              @set-value="setPhone"
          />
          <Button
              style="grid-area: button;"
              type="submit"
              name="Записаться на приём"
              height="50px"
              width="100%"
              br="24px"
              bg="orange"
              @click.prevent="sendForm"
          />
        </div>

        <div class="index-top-form__policy">
          Даю согласие на обработку персональных данных, с условиями политики конфиденциальности ознакомлен
        </div>
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
import { makeAnAppointment } from "@/api";

export default {
  name: "IndexTopForm",
  components: {AnnouncementModal, Button, InputText},
  directives: { mask },
  data() {
    return {
      formSent: false,
      form: {
        name: '',
        phone: '+7'
      }
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
          this.form = {name: '', phone: '+7'}
          this.formSent = true
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/home/indexTopForm";
</style>