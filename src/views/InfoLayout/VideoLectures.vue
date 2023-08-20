<template>
  <BlockOfVideoLectures/>
  <InformationalArticles type="small"/>
</template>

<script>
import InformationalArticles from "@/components/InformationalArticles.vue";
import BlockOfVideoLectures from "@/components/views/videoLectures/BlockOfVideoLectures.vue";

export default {
  name: "VideoLectures",
  components: {BlockOfVideoLectures, InformationalArticles}
}
</script>

<style scoped lang="scss">

</style>