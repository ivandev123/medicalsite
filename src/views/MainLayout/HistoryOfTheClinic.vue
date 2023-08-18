<template>
  <div class="container">
    <ChambersInOurClinic/>
    <OurCertificates/>
  </div>
</template>

<script>
import ChambersInOurClinic from "@/components/ChambersInOurClinic.vue";
import OurCertificates from "@/components/OurCertificates.vue";

export default {
  name: "HistoryOfTheClinic",
  components: {OurCertificates, ChambersInOurClinic}
}
</script>

<style scoped lang="scss">

</style>