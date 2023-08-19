<template>

  <InformationalArticles type="small" :page-width="pageWidth"/>
</template>

<script>
import InformationalArticles from "@/components/InformationalArticles.vue";

export default {
  name: "Price",
  components: {InformationalArticles},
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

<style lang="scss" scoped>

</style>