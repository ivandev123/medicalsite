<template>
  <Breadcrumbs :page-parent="{ name: 'Главная', path: '/' }" :breadcrumbs="[{ name: 'Наши сертефикаты и лицензии', path: '/certificates' }]"/>
  <h1>Наши сертификаты и лицензии</h1>
  <OurCertificates type="small" :page-width="pageWidth"/>
  <Reviews/>
  <InformationalArticles type="small" :page-width="pageWidth"/>
</template>

<script>
import OurCertificates from "@/components/OurCertificates.vue";
import Reviews from "@/components/Reviews.vue";
import InformationalArticles from "@/components/InformationalArticles.vue";
import Breadcrumbs from "@/components/utils/Breadcrumbs.vue";

export default {
  name: "Certificates",
  components: {Breadcrumbs, InformationalArticles, Reviews, OurCertificates},
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
}
</script>

<style scoped lang="scss">

</style>