<template>
  <div style="padding-bottom: 50px;" class="container">
    <h1 style="margin-bottom: 20px;">Полезная информация</h1>


    <HelpfulTable title="График приёма граждан" :table="admissionSchedule"/>
    <HelpfulTable title="Адреса и телефоны контролирующих организаций" :table="contactsOfControllingOrganizations"/>
    <HelpfulInfoText title="Перечень лекарственных препаратов"/>
    <HelpfulInfoText title="Прочая полезная информация"/>
    <HelpfulInfoText title="Нормативная база"/>
  </div>
</template>

<script>
import HelpfulTable from "@/components/views/helpfulInfo/HelpfulTable.vue";
import HelpfulInfoText from "@/components/views/helpfulInfo/HelpfulInfoText.vue";

export default {
  name: "HelpfulInfo",
  components: {HelpfulTable, HelpfulInfoText},
  data() {
    return {
      admissionSchedule: [
        [
          {
            id: 1,
            value: 'Директор'
          },
          {
            id: 2,
            value: 'Афанасьевская Екатерина Владимировна'
          },
          {
            id: 3,
            value: 'каждая пятница'
          },
          {
            id: 4,
            value: '15.00-18.00'
          },
        ],
        [
          {
            id: 1,
            value: 'Директор'
          },
          {
            id: 2,
            value: 'Афанасьевская Екатерина Владимировна'
          },
          {
            id: 3,
            value: 'каждая пятница'
          },
          {
            id: 4,
            value: '15.00-18.00'
          },
        ],
      ],
      contactsOfControllingOrganizations: [
        [
          {
            id: 1,
            value: 'Комитет по здравоохранению Санкт-Петербурга'
          },
          {
            id: 2,
            value: '191023, Санкт-Петербург, Малая Садовая ул., д. 1'
          },
          {
            id: 3,
            value: '635-55-77'
          },
        ],
        [
          {
            id: 1,
            value: 'Территориальный орган Росздравнадзора по Санкт-Петербургу и Ленинградской области'
          },
          {
            id: 2,
            value: '190068, Санкт-Петербург, наб. канала Грибоедова, 88-90, каб. 306'
          },
          {
            id: 3,
            value: '571-39-73'
          },
        ],
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>