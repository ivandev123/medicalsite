<script>
import {defineComponent} from 'vue'
import Header from "@/components/layouts/Header.vue";
import NavAside from "@/components/layouts/InfoLayout/NavAside.vue";
import Footer from "@/components/layouts/Footer.vue";

export default defineComponent({
  name: "InfoLayout",
  components: {Footer, NavAside, Header}
})
</script>

<template>
  <div class="info-layout-wrapper">
    <Header/>
    <main class="info-layout-main">
      <div class="container">
        <div class="info-layout-main__content">
          <NavAside/>
          <div>
            <RouterView/>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.info-layout {
  &-wrapper {
    padding-top: 135.73px;
  }

  &-main {

    &__content {
      display: flex;
      column-gap: 25px;

      & > div {
        width: calc(100% - 230px);
      }
    }
  }
}
</style>