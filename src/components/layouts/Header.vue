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
import OrderConsultationModal from "@/components/modals/OrderConsultationModal.vue";
import AnnouncementModal from "@/components/modals/AnnouncementModal.vue";
import {mapActions, mapState} from "vuex";

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
  methods: {
    ...mapActions('category', ['getCategories']),
  },
  computed: {
    ...mapState('category', ['categories']),

    headerLinks() {
      let categoriesNav = this.categories.map(category => new Object({
        id: category.id,
        title: category.name,
        path: '/category/' + category.id,

        dropdown: category.subcategories.map(subcategory => new Object({
          id: subcategory.id,
          name: subcategory.name,
          path: `/category/${category.id}/subcategory/${subcategory.id}`,

          dropdown: subcategory.item.map(service => new Object({
            id: service.id,
            name: service.name,
            path: `/category/${category.id}/subcategory/${subcategory.id}/service/${service.id}`
          }))
        })),
      }))
      categoriesNav.push(this.otherLinks)
      return categoriesNav
    },
    otherLinks() {
      return {
        id: this.headerLinks?.length + 1,
        title: 'О клинике',
        path: '/history',

        dropdown: [
          {
            id: 1,
            name: 'История клиники',
            path: '/history'
          },
          {
            id: 2,
            name: 'Специалисты',
            path: '/specialists'
          },
          {
            id: 3,
            name: 'Сертификаты и лицензии',
            path: '/certificates'
          },
          {
            id: 4,
            name: 'Цены',
            path: '/price'
          },
          {
            id: 5,
            name: 'Отзывы',
            path: '/reviews'
          },
          {
            id: 6,
            name: 'Фото',
            path: '/photo'
          },
          {
            id: 7,
            name: 'Статьи',
            path: '/blog?page=1'
          },
          {
            id: 8,
            name: 'СМИ о нас',
            path: '/media'
          },
          {
            id: 9,
            name: 'Акции',
            path: '/stock'
          },
          {
            id: 10,
            name: 'Видео лекции',
            path: '/video-lectures'
          },
          {
            id: 11,
            name: 'Контролирующие органы',
            path: '/regulatory-bodies'
          },
          {
            id: 12,
            name: 'Полезная информация',
            path: '/helpful-info'
          },
          {
            id: 13,
            name: 'Контакты',
            path: '/contacts'
          },
          {
            id: 14,
            name: 'Политика конфиденциальности',
            path: '/policy'
          },
          {
            id: 15,
            name: 'Пользовательское соглашение',
            path: '/terms'
          },
        ]
      }
    }
  },
  mounted() {
    this.getCategories()
  }
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
            :path="link.path"
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