<template>
  <div class="specialists">
    <Breadcrumbs :page-parent="{ name: 'Главная', path: '/' }" :breadcrumbs="[{ name: 'Наши специалисты', path: '/specialists' }]"/>
    <h1 class="specialists__title specialists__title_mb-20">Наши специалисты</h1>
    <p class="specialists__desc specialists__desc_mb-20">
      Врач-нарколог осуществляет терапию, профилактику и диагностику алкогольной, табачной,
      наркотической и других зависимостей. Полноценное лечение осуществляется в специализированных клиниках,
      однако возможен выезд на дом для экстренной детоксикации.
    </p>
    <p class="specialists__desc specialists__desc_mb-20">
      В компетенцию нарколога входит изучение проявлений, этиологических факторов и патогенеза токсикомании,
      наркомании и алкоголизма, разработка методов профилактики, проведение диагностики и лечения.
    </p>

    <OurSpecialists title="Врачи"/>
    <SEOText/>
    <OurCertificates type="small" :page-width="pageWidth"/>
    <Reviews/>
    <InformationalArticles type="small" :page-width="pageWidth"/>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/utils/Breadcrumbs.vue";
import OurSpecialists from "@/components/OurSpecialists.vue";
import SEOText from "@/components/SEOText.vue";
import OurCertificates from "@/components/OurCertificates.vue";
import Reviews from "@/components/Reviews.vue";
import InformationalArticles from "@/components/InformationalArticles.vue";

export default {
  name: "Specialists",
  components: {InformationalArticles, Reviews, OurCertificates, SEOText, OurSpecialists, Breadcrumbs},
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
.specialists {
  &__title {
    &_mb-20 {
      margin-bottom: 20px;
    }
  }

  &__desc {
    font-size: 16px;
    line-height: 22px;
    text-align: justify;
    color: #262626;

    &_mb-20 {
      margin-bottom: 20px;
    }
  }
}
</style>