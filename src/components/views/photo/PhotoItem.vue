<template>
  <div class="photo-item">
    <div class="photo-item__body">
      <img alt="image" loading="lazy" :src="image">

      <div class="photo-item__info">
        <div class="photo-item__text">{{ title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoItem",
  props: ['title', 'image'],
}
</script>

<style scoped lang="scss">
.photo-item {
  position: relative;

  &:hover {
    & .photo-item {
      &__info {
        background: transparent;
      }
    }
  }

  &__body {
    position: relative;

    & > img {
      width: 100%;
    }
  }

  &__info {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .5);
    transition: .3s;
    position: absolute;
    inset: 0;
  }

  &__text {
    max-width: 150px;
    font-size: 24px;
    line-height: 26px;
    color: #fff;
    text-align: center;
  }
}
</style>