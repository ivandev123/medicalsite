<script>
import {defineComponent} from 'vue'
import IndexTopForm from "@/components/views/home/IndexTopForm.vue";
import OurServices from "@/components/views/home/OurServices.vue";
import CallToAction from "@/components/CallToAction.vue";
import AdditionalServices from "@/components/AdditionalServices.vue";
import AboutClinic from "@/components/views/home/AboutClinic.vue";
import CallToAction2 from "@/components/CallToAction2.vue";
import OurAdvantages from "@/components/views/home/OurAdvantages.vue";
import HeadDoctorsMessage from "@/components/views/home/HeadDoctorsMessage.vue";
import OperatingProcedure from "@/components/views/home/OperatingProcedure.vue";
import OurSpecialists from "@/components/OurSpecialists.vue";
import OurCertificates from "@/components/OurCertificates.vue";
import Reviews from "@/components/Reviews.vue";
import InformationalArticles from "@/components/InformationalArticles.vue";
import SEOText from "@/components/SEOText.vue";
import FooterCallToAction from "@/components/layouts/FooterCallToAction.vue";

export default defineComponent({
  name: "Home",
  components: {
    FooterCallToAction,
    SEOText,
    InformationalArticles,
    Reviews,
    OurCertificates,
    OurSpecialists,
    OperatingProcedure,
    HeadDoctorsMessage,
    OurAdvantages, CallToAction2, AboutClinic, AdditionalServices, CallToAction, OurServices, IndexTopForm
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
  <IndexTopForm/>
  <div class="container">
    <OurServices/>
    <CallToAction/>
    <AdditionalServices/>
    <AboutClinic/>
    <CallToAction2/>
    <OurAdvantages/>
    <HeadDoctorsMessage/>
    <OperatingProcedure/>
    <OurSpecialists/>
    <OurCertificates/>
    <CallToAction/>
  </div>
  <Reviews :page-width="pageWidth"/>
  <div class="container">
    <InformationalArticles :page-width="pageWidth"/>
    <SEOText/>
  </div>
  <FooterCallToAction/>
</template>

<style scoped lang="scss">

</style>