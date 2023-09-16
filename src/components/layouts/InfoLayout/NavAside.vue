<script>
import {defineComponent} from 'vue'
import Button from "@/components/utils/Button.vue";
import OrderConsultationModal from "@/components/modals/OrderConsultationModal.vue";
import {mapActions, mapState} from "vuex";

export default defineComponent({
  name: "NavAside",
  components: {OrderConsultationModal, Button},
  data() {
    return {
      showOrderConsultationModal: false,
    }
  },
  methods: {
    ...mapActions('category', ['getCategoryById']),

    loadNav() {
      if (this.getCategoryId) this.getCategoryById(this.getCategoryId)
    }
  },
  computed: {
    ...mapState('category', ['category']),

    getCategoryId() {
      return this.$route.params.categoryId
    },
    getNavigation() {
      return this.category.subcategories?.map(subcategory => new Object({
        ...subcategory,
        slug: `/category/${this.getCategoryId}/subcategory/${subcategory.id}`
      }))
    },
  },
  watch: {
    getCategoryId() {
      this.loadNav()
    },
  },
  mounted() {
    this.loadNav()
  }
})
</script>

<template>
  <aside class="sidebar">
    <nav class="sidebar__nav">
      <RouterLink
          v-for="link in getNavigation"
          :key="link.id"
          :to="link.slug"
      >{{ link.name }}</RouterLink>
<!--      <RouterLink to="/cabinet">-->
<!--        Женский алкоголизм-->
<!--      </RouterLink>-->
<!--      <RouterLink to="/my-orders">-->
<!--        Кодирование от алкоголизма-->
<!--      </RouterLink>-->
<!--      <RouterLink to="/partners">-->
<!--        Вывод из запоя-->
<!--      </RouterLink>-->
<!--      <RouterLink to="/operations">-->
<!--        Детоксикация-->
<!--      </RouterLink>-->
<!--      <RouterLink to="/promo-materials">-->
<!--        Реабилитация-->
<!--      </RouterLink>-->
<!--      <RouterLink to="/settings">-->
<!--        Лечение за границей-->
<!--      </RouterLink>-->
<!--      <RouterLink to="/settings">-->
<!--        Лечебно-диагностическая программа-->
<!--      </RouterLink>-->
<!--      <RouterLink to="/settings">-->
<!--        Гарантии на лечение-->
<!--      </RouterLink>-->
<!--      <RouterLink to="/settings">-->
<!--        Причины алкоголизма-->
<!--      </RouterLink>-->
<!--      <RouterLink to="/settings">-->
<!--        Медикаментозное лечение в стационаре-->
<!--      </RouterLink>-->
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