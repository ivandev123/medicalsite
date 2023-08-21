<template>
  <div class="contacts-info">
    <h1>Наши контакты в Ростове-на-Дону</h1>

    <div class="contacts-info__content contacts-info__content_mt-20">
      <address class="contacts-info__item">

      </address>
      <div class="contacts-info__item">
        <div class="contacts-info__item-info">
          <h3>Посетите одну из наших наркологических клиник</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsInfo"
}
</script>

<style scoped lang="scss">
.contacts-info {
  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;

    &_mt-20 {
      margin-top: 20px;
    }
  }

  &__item {
    border-radius: 20px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, .05);

    &:first-child {
      padding: 30px;
      background: #FFFFFF;
    }

    &:last-child {
      padding: 60px 60px 0;
      background: url('@/assets/images/contacts-info-item-bg.jpg');
      background-size: cover;
    }
  }
}
</style>