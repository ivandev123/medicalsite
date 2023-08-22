<template>
  <div class="container">
    <ChambersInOurClinic/>
    <OurCertificates :page-width="pageWidth"/>
  </div>
</template>

<script>
import ChambersInOurClinic from "@/components/ChambersInOurClinic.vue";
import OurCertificates from "@/components/OurCertificates.vue";

export default {
  name: "HistoryOfTheClinic",
  components: {OurCertificates, ChambersInOurClinic},
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