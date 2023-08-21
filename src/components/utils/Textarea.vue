<template>
  <textarea/>
</template>

<script>
export default {
  name: "Textarea"
}
</script>

<style scoped lang="scss">
textarea {
  padding: 10px 12px;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #DFDFDF;
  border-radius: 10px;
  transition: .25s;
  resize: vertical;

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