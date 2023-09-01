<script>
import {defineComponent} from 'vue'
import HeaderLink from "@/components/header/HeaderLink.vue";
import Button from "@/components/utils/Button.vue";
import FacebookIcon from "@/components/icons/networks/FacebookIcon.vue";
import InstagramIcon from "@/components/icons/networks/InstagramIcon.vue";
import TelegramIcon from "@/components/icons/networks/TelegramIcon.vue";
import TwitterIcon from "@/components/icons/networks/TwitterIcon.vue";
import VKIcon from "@/components/icons/networks/VKIcon.vue";
import YouTubeIcon from "@/components/icons/networks/YouTubeIcon.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import headerLinks from "@/data/headerLinks";
import OrderConsultationModal from "@/components/modals/OrderConsultationModal.vue";
import AnnouncementModal from "@/components/modals/AnnouncementModal.vue";

export default defineComponent({
  name: "Header",
  components: {
    AnnouncementModal,
    OrderConsultationModal, LogoIcon, YouTubeIcon, VKIcon, TwitterIcon, TelegramIcon, InstagramIcon, FacebookIcon, Button, HeaderLink
  },
  data() {
    return {
      showOrderConsultationModal: false,
      showAnnouncementModal: false,
    }
  },
  computed: {
    headerLinks() {
      return headerLinks
    }
  },
})
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__logo">
          <LogoIcon @click="$router.push('/')"/>

          <div class="header__info">
            <a href="tel:8-800-500-75-94" class="header__phone-number">8-800-500-75-94</a>
            <div class="header__networks">
              <FacebookIcon/>
              <InstagramIcon/>
              <TelegramIcon/>
              <TwitterIcon/>
              <VKIcon/>
              <YouTubeIcon/>
            </div>
          </div>
        </div>
        <div class="header__right">
          <Button name="Заказать консультацию" bg="orange" @click="showOrderConsultationModal = true"/>
        </div>
      </div>
      <nav class="header__nav">
        <HeaderLink
            v-for="link in headerLinks"
            :key="link.id"
            :name="link.title"
            :dropdown="link.dropdown"
        />
      </nav>
    </div>
  </header>

  <OrderConsultationModal
      @close="showOrderConsultationModal = false"
      v-if="showOrderConsultationModal"
  />
</template>

<style scoped lang="scss">
@import "@/assets/scss/components/layouts/header";
</style>