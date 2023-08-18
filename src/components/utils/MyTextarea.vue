<template>
  <textarea class="my-textarea"/>
</template>

<script>
export default {
  name: "MyTextarea"
}
</script>

<style scoped lang="scss">
.my-textarea {
  padding: 15px 25px;
  width: 100%;
  height: 100px;
  border-radius: 12px;
  background: #FFFFFF;
  border: 1px solid #DFDFDF;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #262626;

  &::placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #9DA0AF;
  }
}
</style>