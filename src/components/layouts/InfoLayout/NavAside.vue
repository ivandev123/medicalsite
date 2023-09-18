<script>
import {defineComponent} from 'vue'
import Button from "@/components/utils/Button.vue";
import OrderConsultationModal from "@/components/modals/OrderConsultationModal.vue";
import {mapActions, mapState} from "vuex";
import Preloader from "@/components/Preloader.vue";

export default defineComponent({
  name: "NavAside",
  components: {Preloader, OrderConsultationModal, Button},
  data() {
    return {
      showOrderConsultationModal: false,
    }
  },
  methods: {
    ...mapActions('category', ['getCategoryById', 'getSubcategoryById']),
    ...mapActions('services', ['getServiceById']),

    loadNav() {
      if (this.getServiceId) this.getServiceById(this.getServiceId)
      if (this.getCategoryId) this.getCategoryById(this.getCategoryId)
      if (this.getSubcategoryId) this.getSubcategoryById(this.getSubcategoryId)
    }
  },
  computed: {
    ...mapState('category', ['category', 'subcategory']),
    ...mapState('services', ['service']),

    getCategoryId() {
      return this.$route.params.categoryId
    },
    getSubcategoryId() {
      return this.$route.params.subcategoryId
    },
    getServiceId() {
      return this.$route.params.serviceId
    },
    getStaticNav() {
      return [
        {
          id: 1,
          name: 'История клиники',
          slug: '/history'
        },
        {
          id: 2,
          name: 'Специалисты',
          slug: '/specialists'
        },
        {
          id: 3,
          name: 'Сертификаты и лицензии',
          slug: '/certificates'
        },
        {
          id: 4,
          name: 'Цены',
          slug: '/price'
        },
        {
          id: 5,
          name: 'Отзывы',
          slug: '/reviews'
        },
        {
          id: 6,
          name: 'Фото',
          slug: '/photo'
        },
        {
          id: 7,
          name: 'Статьи',
          slug: '/blog?page=1'
        },
        {
          id: 8,
          name: 'СМИ о нас',
          slug: '/media'
        },
        {
          id: 9,
          name: 'Акции',
          slug: '/stock'
        },
        {
          id: 10,
          name: 'Видео лекции',
          slug: '/video-lectures'
        },
        {
          id: 11,
          name: 'Контролирующие органы',
          slug: '/regulatory-bodies'
        },
        {
          id: 12,
          name: 'Полезная информация',
          slug: '/helpful-info'
        },
        {
          id: 13,
          name: 'Контакты',
          slug: '/contacts'
        },
        {
          id: 14,
          name: 'Политика конфиденциальности',
          slug: '/policy'
        },
        {
          id: 15,
          name: 'Пользовательское соглашение',
          slug: '/terms'
        },
      ]
    },
    getNavigation() {
      const subcategories = this.category.subcategories?.map(subcategory => new Object({
        ...subcategory,
        slug: `/category/${this.getCategoryId}/subcategory/${subcategory.id}`
      }))

      switch (true) {
        case !!this.getServiceId:
          return [{
            ...this.service,
            slug: `/category/${this.getCategoryId}/subcategory/${this.getSubcategoryId}/service/${this.getServiceId}`
          }]
        case !!this.getSubcategoryId:
          const services = this.subcategory.item?.map(item => new Object({
            ...item,
            slug: `/category/${this.getCategoryId}/subcategory/${this.getSubcategoryId}/service/${item.id}`
          }))

          return this.subcategory.item?.length ? services : subcategories
        case !!this.getCategoryId:
          return subcategories
        default:
          return this.getStaticNav
      }
    },
  },
  watch: {
    getCategoryId() {
      this.loadNav()
    },
    getSubcategoryId() {
      this.loadNav()
    }
  },
  mounted() {
    this.loadNav()
  }
})
</script>

<template>
  <aside class="sidebar">
    <Preloader v-if="!getNavigation?.length"/>
    <nav class="sidebar__nav">
      <RouterLink
          v-for="link in getNavigation"
          :key="link.id"
          :to="link.slug"
      >{{ link.name }}</RouterLink>
    </nav>

    <div class="sidebar__line"/>

    <div class="sidebar__button">
      <Button
          name="Бесплатная консультация"
          width="100%"
          bg="orange"
          @click="showOrderConsultationModal = true"
      />
    </div>
  </aside>
  <OrderConsultationModal @close="showOrderConsultationModal = false" v-if="showOrderConsultationModal"/>
</template>

<style scoped lang="scss">
.sidebar {
  flex-shrink: 0;
  width: 230px;
  height: fit-content;
  position: sticky;
  top: 135.73px;

  &__nav {
    display: flex;
    flex-direction: column;
    row-gap: 4px;

    & > a {
      display: flex;
      align-items: center;
      column-gap: 16px;
      padding: 14px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #4B535A;
      cursor: pointer;
      transition: all .25s ease;

      &.router-link-active,
      &:hover {
        column-gap: 16px;
        background: #FFFFFF;
        color: #FF6100;

        & path {
          fill: #FF6100;
        }
      }
    }
  }

  &__line {
    margin: 24px 0 26px;
    height: 1px;
    background: #DFDFDF;
  }
}
</style>