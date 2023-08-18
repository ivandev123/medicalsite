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
  created() {
    this.setWidth()
    window.onresize = () => this.setWidth()
  }
})
</script>

<template>
  <Breadcrumbs page-title="Главная" :breadcrumbs="['Категории', 'Лечение алкоголизма']"/>
  <CategoriesBanner/>
  <HowToDetermine/>
  <PrimaryDiagnosis/>
  <OurPrograms/>
  <StagesOfTreatment/>
  <OurSpecialists/>
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
</style>