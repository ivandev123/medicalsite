<template>
  <form class="add-comment-form">
    <h2>Добавить комментарий</h2>

    <div class="add-comment-form__content add-comment-form__content_mt-20">
      <textarea style="grid-area: comment;"/>
      <InputText style="grid-area: name;"/>
      <InputText style="grid-area: email;"/>
      <InputText style="grid-area: website;"/>
    </div>
  </form>
</template>

<script>
import InputText from "@/components/utils/InputText.vue";

export default {
  name: "AddCommentForm",
  components: {InputText}
}
</script>

<style scoped lang="scss">
.add-comment-form {
  margin-top: 50px;
  padding: 50px;
  box-shadow: rgba(1, 1, 1, 0.05) 0 0 10px;
  border-radius: 10px;

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
        "comment comment"
        "name email"
        "website website";
    gap: 15px 30px;

    &_mt-20 {
      margin-top: 20px;
    }
  }
}
</style>