<template>
  <div class="container">
    <ContactsInfo/>
    <ClinicAddresses/>
    <InformationalArticles :page-width="pageWidth"/>
  </div>
  <FooterCallToAction/>
</template>

<script>
import ContactsInfo from "@/components/views/contacts/ContactsInfo.vue";
import InformationalArticles from "@/components/InformationalArticles.vue";
import FooterCallToAction from "@/components/layouts/FooterCallToAction.vue";
import ClinicAddresses from "@/components/views/contacts/ClinicAddresses.vue";

export default {
  name: "Contacts",
  components: {ClinicAddresses, FooterCallToAction, InformationalArticles, ContactsInfo},
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