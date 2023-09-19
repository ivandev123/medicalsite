<template>
  <section class="our-services">
    <h2 class="our-services__title">Наши услуги</h2>

    <Preloader style="margin-top: 42px;" v-if="!services.data?.length"/>
    <div class="our-services__content our-services__content_mt-42" v-if="services.data?.length">
      <RouterLink
          class="our-services__service"
          to="/"
          v-for="(service, idx) in services.data"
          :key="service.id"
      >
        <div class="our-services__picture">
          <img alt="service" :src="service.image">
<!--          src="../../../assets/images/our-service.jpg"-->
        </div>
        <div class="our-services__info">
          <div class="our-services__info-title">{{ service.name }}</div>
          <div class="our-services__info-subtitle">{{ service.content }}</div>
          <div class="our-services__number">{{ idx + 1 }}</div>
        </div>
      </RouterLink>
    </div>
    <Pagination :prev-page="getPrevPage" :next-page="getNextPage" :links="getLinks"/>
  </section>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Preloader from "@/components/Preloader.vue";
import Pagination from "@/components/utils/Pagination.vue";

export default {
  name: "OurServices",
  components: {Pagination, Preloader},
  methods: {
    ...mapActions('services', ['getServices']),
  },
  computed: {
    ...mapState('services', ['services']),

    getPage() {
      return this.$route.query['services-page']
    },
    getLinks() {
      return this.services.links
          ?.slice(1, this.services.links.length - 1)
          .map(link => new Object({
            ...link,
            url: '/?services-page=' + link.url.split('?page=')[1]
          }));
    },
    getPrevPage() {
      const page = this.services.links?.[0].url?.split('?page=')[1]

      return '/?services-page=' + page
      // return this.blogArticles?.links[0]?.url?.split('/api')[1]
    },
    getNextPage() {
      const page = this.services.links?.at(-1).url?.split('?page=')[1]

      return '/?services-page=' + page
    }
  },
  watch: {
    getPage() {
      this.getServices(this.getPage)
    }
  },
  mounted() {
    this.getServices(this.getPage ? this.getPage : 1)
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/home/ourServices";
</style>