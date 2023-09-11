<template>
  <div style="padding-bottom: 50px;" class="container">
    <h1 style="margin-bottom: 20px;">Полезная информация</h1>

    <HelpfulTable title="График приёма граждан" :table="getInformationScheduleTable"/>
    <HelpfulTable title="Адреса и телефоны контролирующих организаций" :table="getInformationOrganizationsTable"/>
<!--    <HelpfulInfoText title="Перечень лекарственных препаратов"/>-->
<!--    <HelpfulInfoText title="Прочая полезная информация"/>-->
<!--    <HelpfulInfoText title="Нормативная база"/>-->
    <Preloader style="margin-top: 20px;" v-if="!information.length"/>
    <HelpfulInfoText
        v-for="item in information"
        :key="item.id"
        :title="item.title"
        :content="item.content"
    />
  </div>
</template>

<script>
import HelpfulTable from "@/components/views/helpfulInfo/HelpfulTable.vue";
import HelpfulInfoText from "@/components/views/helpfulInfo/HelpfulInfoText.vue";
import {mapActions, mapState} from "vuex";
import Preloader from "@/components/Preloader.vue";

export default {
  name: "HelpfulInfo",
  components: {Preloader, HelpfulTable, HelpfulInfoText},
  methods: {
    ...mapActions('helpfulInfo', ['getInformationSchedule', 'getInformationOrganizations', 'getInformation']),
  },
  computed: {
    ...mapState('helpfulInfo', ['informationSchedule', 'informationOrganizations', 'information']),

    getInformationScheduleTable() {
      let table = []

      this.informationSchedule.forEach((item, idx) => {
        table[idx] = []

        for (const key in item) {
          const unreadableKeys = ['id', 'created_at', 'updated_at']
          if (unreadableKeys.includes(key)) continue
          table[idx].push({ id: idx + 1, value: item[key] })
        }
      })

      return table
    },
    getInformationOrganizationsTable() {
      let table = []

      this.informationOrganizations.forEach((item, idx) => {
        table[idx] = []

        for (const key in item) {
          const unreadableKeys = ['id', 'created_at', 'updated_at']
          if (unreadableKeys.includes(key)) continue
          table[idx].push({ id: idx + 1, value: item[key] })
        }
      })

      return table
    }
  },
  mounted() {
    this.getInformationSchedule()
    this.getInformationOrganizations()
    this.getInformation()
  }
}
</script>

<style scoped lang="scss">

</style>