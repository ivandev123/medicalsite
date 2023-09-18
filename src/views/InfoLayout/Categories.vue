<script>
import {defineComponent} from 'vue'
import Breadcrumbs from "@/components/utils/Breadcrumbs.vue";
import CategoriesBanner from "@/components/views/categories/CategoriesBanner.vue";
import OurPrograms from "@/components/views/categories/OurPrograms.vue";
import StagesOfTreatment from "@/components/views/categories/StagesOfTreatment.vue";
import OurSpecialists from "@/components/OurSpecialists.vue";
import CallToAction from "@/components/CallToAction.vue";
import OurAchievements from "@/components/views/categories/OurAchievements.vue";
import GuaranteesAndBenefits from "@/components/views/categories/GuaranteesAndBenefits.vue";
import TypesOfTreatment from "@/components/views/categories/TypesOfTreatment.vue";
import ChambersInOurClinic from "@/components/ChambersInOurClinic.vue";
import OurCertificates from "@/components/OurCertificates.vue";
import Reviews from "@/components/Reviews.vue";
import InformationalArticles from "@/components/InformationalArticles.vue";
import {mapState} from "vuex";
import CategoryAnchors from "@/components/views/categories/CategoryAnchors.vue";
import Preloader from "@/components/Preloader.vue";

export default defineComponent({
  name: "Categories",
  components: {
    Preloader,
    CategoryAnchors,
    InformationalArticles,
    Reviews,
    OurCertificates,
    ChambersInOurClinic,
    TypesOfTreatment,
    GuaranteesAndBenefits,
    OurAchievements,
    CallToAction,
    OurSpecialists,
    StagesOfTreatment,
    OurPrograms,
    CategoriesBanner,
    Breadcrumbs
  },
  data() {
    return {
      pageWidth: 0,
    }
  },
  methods: {
    setWidth() {
      this.pageWidth = window.innerWidth
    },
    anchor(blockId) {
      document.querySelector(`#${blockId}`).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
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
    getBreadcrumbs() {
      const category = { name: this.category?.name, path: `/category/${this.category.id}` }
      const subcategory = {
        name: this.subcategory.name,
        path: `/category/${this.getCategoryId}/subcategory/${this.subcategory.id}`
      }
      const service = {
        name: this.service.name,
        path: `/category/${this.getCategoryId}/subcategory/${this.subcategory.id}/service/${this.getServiceId}`
      }

      switch (true) {
        case !!this.getServiceId:
          return [category, subcategory, service]
        case !!this.getSubcategoryId:
          return [category, subcategory]
        case !!this.getCategoryId:
          return [category]
      }
    },
    getContent() {
      switch (true) {
        case !!this.getSubcategoryId:
          return this.subcategory.content
        case !!this.getCategoryId:
          return this.category.content
      }
    },
    getShowBanner() {
      switch (true) {
        case !!this.getSubcategoryId:
          return this.subcategory.banner
        case !!this.getCategoryId:
          return this.category.banner
      }
    },
    getPrices() {
      return this.category.subcategories?.map(subcategory => new Object({
        ...subcategory,
        path: `/category/${this.getCategoryId}/subcategory/${subcategory.id}`
      }))
    },
    getAnchors() {
      const anchors = [
        {
          id: 1,
          name: 'Программы',
          blockId: 'programs'
        },
        {
          id: 2,
          name: 'Методы лечения',
          blockId: 'stagesOfTreatment'
        },
        {
          id: 3,
          name: 'Специалисты',
          blockId: 'specialists'
        },
        {
          id: 4,
          name: 'Статистика',
          blockId: 'statistics'
        },
        {
          id: 5,
          name: 'Гарантии',
          blockId: 'guarantees'
        },
        {
          id: 6,
          name: 'Сертификаты',
          blockId: 'certificates'
        },
        {
          id: 7,
          name: 'Отзывы',
          blockId: 'reviews'
        },
        {
          id: 8,
          name: 'Новости',
          blockId: 'news'
        },
      ]

      return this.subcategory.item?.length ? anchors : anchors.splice(1)
    }
  },
  created() {
    this.setWidth()
    window.onresize = () => this.setWidth()
  }
})
</script>

<template>
  <Breadcrumbs
      :page-parent="{ name: 'Главная', path: '/' }"
      :breadcrumbs="getBreadcrumbs"
  />
  <CategoriesBanner v-if="getShowBanner"/>
  <CategoryAnchors :anchors="getAnchors" @anchor="anchor"/>

<!--  <div style="margin-top: 30px;" v-html="getContent"></div>-->
  <Preloader style="margin-top: 30px;" v-if="!getContent"/>
  <div class="categories-content" v-html="getContent"/>
  <OurPrograms id="programs" :services="subcategory.item" v-if="getSubcategoryId && subcategory.item?.length"/>
  <StagesOfTreatment id="stagesOfTreatment"/>
  <OurSpecialists id="specialists" class="little"/>
  <CallToAction/>
  <OurAchievements id="statistics"/>
  <GuaranteesAndBenefits id="guarantees"/>
  <TypesOfTreatment :prices="getPrices" v-if="getCategoryId && !getSubcategoryId"/>
  <ChambersInOurClinic/>
  <OurCertificates id="certificates" type="small" :page-width="pageWidth"/>
  <Reviews id="reviews"/>
  <InformationalArticles id="news"/>
</template>

<style scoped lang="scss">
.categories-content {
  margin-top: 30px;

  & ::v-deep {
    & h2 {
      margin-bottom: 20px;
    }

    & li {
      &::marker {
        content: '';
      }
    }

    & ol {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      margin-bottom: 25px;

      & > li {
        width: 100%;
        border: 2px solid rgba(255, 167, 101, .3);
        border-radius: 10px;
        padding: 20px;

        font-size: 14px;
        line-height: 24px;
        color: #262626;
        position: relative;

        & > i {
          display: block;
          margin-bottom: 20px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #FFFFFF;
          font-weight: 400;
          font-size: 25px;
          font-style: normal;
          line-height: 56px;
          color: #FFA765;
          text-align: center;
        }
      }
    }

    & ul {
      //display: inline;
      //width: 55%;
      margin-bottom: 25px;
      padding: 20px;
      background: rgba(255, 167, 101, .05);
      border-radius: 10px;

      & > li {
        font-weight: 400;
        font-size: 15px;
        line-height: 27px;
        color: #262626;

        &:before {
          content: '';
          display: inline-block;
          margin-right: 7px;
          width: 6px;
          height: 6px;
          background: #FFA765;
          border-radius: 50%;
          vertical-align: middle;
        }
      }

      & + p {
        //display: inline;
        //width: 42.5%;
        margin-bottom: 25px;
        font-weight: 400;
        font-size: 15px;
        line-height: 26px;
        color: #262626;
      }
    }

    & > p {
      margin-bottom: 25px;
      font-size: 16px;
      line-height: 29px;
      color: #333333;
    }
  }
}
</style>