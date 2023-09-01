<script>
import Breadcrumbs from "@/components/utils/Breadcrumbs.vue";
import PreviewOfInfoArticles from "@/components/views/blog/PreviewOfInfoArticles.vue";

export default {
  name: "Blog",
  components: { Breadcrumbs, PreviewOfInfoArticles }
}
</script>

<template>
  <div class="container">
    <Breadcrumbs page-title="Главная" :breadcrumbs="['Категории', 'Лечение алкоголизма']"/>
    <PreviewOfInfoArticles style="margin-bottom: 50px;"/>
  </div>
</template>

<style scoped lang="scss">

</style>