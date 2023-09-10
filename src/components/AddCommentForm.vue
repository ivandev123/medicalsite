<template>
  <form class="add-comment-form">
    <h2>Добавить комментарий</h2>

    <div class="add-comment-form__content add-comment-form__content_mt-20">
      <MyTextarea placeholder="Ваш комментарий" style="grid-area: comment;" :default-value="comment.comment" @set-value="setComment"/>
      <InputText placeholder="Ваше имя" style="grid-area: name;" :default-value="comment.name" @set-value="setName"/>
      <InputText placeholder="Ваш email" style="grid-area: email;" :default-value="comment.email" @set-value="setEmail"/>
    </div>
    <Button
        style="margin-top: 20px;"
        type="submit"
        name="Отправить комментарий"
        padding="14px 24px"
        font-size="16px"
        @click.prevent="addComment"
    />
  </form>
</template>

<script>
import InputText from "@/components/utils/InputText.vue";
import Button from "@/components/utils/Button.vue";
import MyTextarea from "@/components/utils/MyTextarea.vue";
import {mapActions} from "vuex";

export default {
  name: "AddCommentForm",
  components: {MyTextarea, Button, InputText},
  props: ['id'],
  data() {
    return {
      comment: {
        comment: '',
        name: '',
        email: '',
      }
    }
  },
  methods: {
    ...mapActions('blog', ['addBlogArticleComment']),

    setComment(comment) {
      this.comment.comment = comment
    },
    setName(name) {
      this.comment.name = name
    },
    setEmail(email) {
      this.comment.email = email
    },
    addComment() {
      this.addBlogArticleComment({ ...this.comment, blog_id: this.id })
      for (let key in this.comment) this.comment[key] = ''
    }
  }
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
        "name email";
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