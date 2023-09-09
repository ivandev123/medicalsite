<template>
  <div class="comments">
    <h2>Комментарии: 3</h2>

    <Preloader style="margin-top: 20px;"/>
    <div class="comments__content comments__content_mt-20">
      <div class="comments__item">
        <img src="@/assets/images/avatar.jpg" alt="avatar" class="comments__item-avatar">


        <div class="comments__item-info">
          <div>
            <h3>Алексей</h3>
            <time>26.05.2016 в 17:30</time>
          </div>
          <p>
            Здравствуйте, Андрей!
            Как всегда вы умеете удивить своими хорошо раскрытыми статьями.
            Эта статья про Хайпы очень интересная, читал ее с восторгом.
            Все очень понятно рассказано и описано!
            Продолжайте в том же духе. У вас это хорошо получается! Удачи!
          </p>
        </div>
      </div>
      <div class="comments__item">
        <img src="@/assets/images/avatar.jpg" alt="avatar" class="comments__item-avatar">

        <div class="comments__item-info">
          <div>
            <h3>Алексей</h3>
            <time>26.05.2016 в 17:30</time>
          </div>
          <p>
            Мне тоже очень понравилась. Хорошо расписано.
          </p>
        </div>
      </div>
      <div class="comments__item">
        <img src="@/assets/images/avatar.jpg" alt="avatar" class="comments__item-avatar">


        <div class="comments__item-info">
          <div>
            <h3>Алексей</h3>
            <time>26.05.2016 в 17:30</time>
          </div>
          <p>
            Отличная статья. Достаточно познавательна
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader.vue";

export default {
  name: "Comments",
  components: {Preloader}
}
</script>

<style scoped lang="scss">
.comments {
  margin-top: 40px;

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 25px;

    &_mt-20 {
      margin-top: 20px;
    }
  }

  &__item {
    display: flex;
    column-gap: 15px;

    &-avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      object-fit: cover;
    }

    &-info {
      display: flex;
      flex-direction: column;
      row-gap: 5px;

      & > div {
        display: flex;
        align-items: center;
        column-gap: 40px;

        & > time {
          color: #9DA0AF;
        }
      }

      & > p {

      }
    }
  }
}
</style>