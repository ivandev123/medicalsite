<template>
  <div class="container">
    <ContactsInfo/>
    <InformationalArticles/>
  </div>
  <FooterCallToAction/>
</template>

<script>
import ContactsInfo from "@/components/views/contacts/ContactsInfo.vue";
import InformationalArticles from "@/components/InformationalArticles.vue";
import FooterCallToAction from "@/components/layouts/FooterCallToAction.vue";

export default {
  name: "Contacts",
  components: {FooterCallToAction, InformationalArticles, ContactsInfo}
}
</script>

<style scoped lang="scss">

</style>