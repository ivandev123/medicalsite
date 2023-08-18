<script>
import {defineComponent} from 'vue'
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";

export default defineComponent({
  name: "MainLayout",
  components: {Footer, Header}
})
</script>

<template>
  <div class="wrapper">
    <Header/>
    <main>
      <RouterView/>
    </main>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding-top: 130.73px;
}
</style>