<template>
  <form class="add-comment-form">
    <h2>Добавить комментарий</h2>

    <div class="add-comment-form__content add-comment-form__content_mt-20">
      <Textarea placeholder="Comment" style="grid-area: comment;"/>
      <InputText placeholder="Name" style="grid-area: name;"/>
      <InputText placeholder="Email" style="grid-area: email;"/>
      <InputText placeholder="Website" style="grid-area: website;"/>
    </div>
    <Button style="margin-top: 20px;" name="Отправить комментарий" padding="14px 24px" font-size="16px"/>
  </form>
</template>

<script>
import InputText from "@/components/utils/InputText.vue";
import Textarea from "@/components/utils/Textarea.vue";
import Button from "@/components/utils/Button.vue";

export default {
  name: "AddCommentForm",
  components: {Button, Textarea, InputText}
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
    grid-template-areas:
        "comment comment"
        "name email"
        "website website";
    gap: 15px 30px;

    &_mt-20 {
      margin-top: 20px;
    }

    & > textarea {
      height: 200px;
    }
  }
}
</style>