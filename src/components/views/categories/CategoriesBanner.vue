<script>
import {defineComponent} from 'vue'
import Button from "@/components/utils/Button.vue";
import OrderConsultationModal from "@/components/modals/OrderConsultationModal.vue";

export default defineComponent({
  name: "CategoriesBanner",
  components: {OrderConsultationModal, Button},
  data() {
    return {
      showOrderConsultationModal: false,
    }
  }
})
</script>

<template>
  <div class="categories-banner">
    <div class="categories-banner__content">
      <div class="categories-banner__left">
        <h1>Лечение алкоголизма в Ростове-на-Дону</h1>

        <p class="categories-banner__description">
          Употребление алкоголя не только влияет на физическое самочувствие и социальное благополучие.
          Многие пьющие, в конечном итоге, становятся асоциальными из-за того, что пьянство ограничивает их взаимодействие с другими.
          Решить проблему можно разными способами, но все они начинаются с консультации нарколога-психиатра, который подскажет в каком направлении двигаться наиболее эффективно в вашем случае.
          Чтобы записаться на бесплатную консультацию заполните форму рядом.
        </p>
      </div>

      <div class="categories-banner__right">
        <h2>Получите бесплатную консультацию врача</h2>
        <Button name="Записаться на приём" width="100%" @click="showOrderConsultationModal = true"/>

        <p>Отправляя заявку вы соглашаетесь с условиями нашей <a href="#">политики конфиденциальности.</a></p>
      </div>
    </div>
  </div>
  <OrderConsultationModal
      v-if="showOrderConsultationModal"
      @close="showOrderConsultationModal = false"
  />
</template>

<style scoped lang="scss">
.categories-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  width: 100%;
  height: 647px;
  border-radius: 20px;
  background-image: url("@/assets/images/categories-banner-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 25px;
    padding: 42px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.8);
  }

  &__left {
    max-width: 525px;

    & > h1 {
      margin-bottom: 30px;
      font-size: 34px;
      font-weight: 800;
      line-height: 44px;
      text-transform: uppercase;
      color: #282828;
    }
  }

  &__descripton {
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #313131;
  }

  &__right {
    flex-shrink: 0;
    margin: 0 auto;
    max-width: 350px;
    width: 100%;
    padding: 40px 30px 30px;
    border: 1px solid #edeef0;
    border-radius: 16px;
    background-color: #FFFFFF;
    box-shadow: 0 0 20px rgba(195, 199, 204, .2);

    & > h2 {
      margin-bottom: 15px;
      font-weight: 800;
      font-size: 20px;
      line-height: 120%;
      text-align: center;
    }

    & > p {
      margin-top: 13px;
      font-size: 14px;
      line-height: 21px;
      text-align: center;

      & > a {
        font-size: 14px;
        font-weight: normal;
        line-height: 21px;
        text-decoration: underline;
        color: #FFA765;

        &:hover {
          text-decoration: none;
          color: #ff954b;
        }
      }
    }
  }
}
</style>