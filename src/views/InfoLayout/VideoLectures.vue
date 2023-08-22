<template>
  <BlockOfVideoLectures/>
  <InformationalArticles type="small" :page-width="pageWidth"/>
</template>

<script>
import InformationalArticles from "@/components/InformationalArticles.vue";
import BlockOfVideoLectures from "@/components/views/videoLectures/BlockOfVideoLectures.vue";

export default {
  name: "VideoLectures",
  components: {BlockOfVideoLectures, InformationalArticles},
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