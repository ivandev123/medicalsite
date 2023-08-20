<template>
  <h2 style="margin: 30px 0 20px;">{{ title }}</h2>
  <table class="helpful-table">
    <tbody>
    <tr v-for="(tr, idx) in table" :key="idx">
      <td v-for="td in tr" :key="td.id">{{ td.value }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "HelpfulTable",
  props: ['title', 'table']
}
</script>

<style scoped lang="scss">
.helpful-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  & tr {
    & > td {
      padding: 11px;
      border: 1px solid #e5e5e5;
    }
  }
}
</style>