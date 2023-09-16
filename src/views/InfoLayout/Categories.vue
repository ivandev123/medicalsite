<script>
import {defineComponent} from 'vue'
import Breadcrumbs from "@/components/utils/Breadcrumbs.vue";
import CategoriesBanner from "@/components/views/categories/CategoriesBanner.vue";
import HowToDetermine from "@/components/views/categories/HowToDetermine.vue";
import PrimaryDiagnosis from "@/components/views/categories/PrimaryDiagnosis.vue";
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

export default defineComponent({
  name: "Categories",
  components: {
    InformationalArticles,
    Reviews,
    OurCertificates,
    ChambersInOurClinic,
    TypesOfTreatment,
    GuaranteesAndBenefits,
    OurAchievements,
    CallToAction,
    OurSpecialists,
    StagesOfTreatment, OurPrograms, PrimaryDiagnosis, HowToDetermine, CategoriesBanner, Breadcrumbs
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
  },
  computed: {
    ...mapState('category', ['category', 'subcategory']),

    getCategoryId() {
      return this.$route.params.categoryId
    },
    getSubcategoryId() {
      return this.$route.params.subcategoryId
    },
    getBreadcrumbs() {
      const category = { name: this.category.name, path: `/category/${this.category.id}` }
      const subcategory = {
        name: this.subcategory.name,
        path: `/category/${this.getCategoryId}/subcategory/${this.subcategory.id}`
      }

      switch (true) {
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
  <CategoriesBanner/>

<!--  <div style="margin-top: 30px;" v-html="getContent"></div>-->
  <div class="categories-content">

  </div>
  <HowToDetermine/>
  <PrimaryDiagnosis/>
  <OurPrograms/>
  <StagesOfTreatment/>
  <OurSpecialists class="little"/>
  <CallToAction/>
  <OurAchievements/>
  <GuaranteesAndBenefits/>
  <TypesOfTreatment/>
  <ChambersInOurClinic/>
  <OurCertificates type="small" :page-width="pageWidth"/>
  <Reviews/>
  <InformationalArticles/>
</template>

<style scoped lang="scss">
.categories-content {
  & ol {

  }

  & ul {

  }
}
</style>