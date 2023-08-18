<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Breadcrumbs",
  props: ['pageTitle', 'breadcrumbs']
})
</script>

<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__title" v-html="pageTitle"/>
    <svg
        width="11"
        height="11"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="breadcrumbs__delimiter"
    >
      <path d="M93.5 174.5L256.5 337.5L419.5 174.5" stroke="black" stroke-width="24" stroke-linecap="round"/>
    </svg>
    <div class="breadcrumbs__content">
      <span
          :class="{ 'breadcrumbs__section-title': !idx, 'breadcrumbs__section-item': idx }"
          v-for="(item, idx) in breadcrumbs"
          :key="idx"
      >
          <svg
              width="11"
              height="11"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="breadcrumbs__delimiter"
              v-if="idx"
          >
            <path d="M93.5 174.5L256.5 337.5L419.5 174.5" stroke="black" stroke-width="24" stroke-linecap="round"/>
          </svg>

          {{ item }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  //justify-content: space-between;
  align-items: center;
  padding: 0 12px 24px;

  &__title {
    display: flex;
    align-items: center;
    margin-right: 8px;
    font-weight: 700;
    color: #24c8bc;
    cursor: pointer;
    position: relative;

    &:before {
      content: '';
      width: 100%;
      height: 1px;
      background: #24c8bc;
      transition: .25s all ease;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }

    &:hover {
      color: #3bbbb1;

      &:before {
        opacity: 0;
      }
    }
  }

  &__content {
    display: flex;
    align-items: center;
  }

  &__section {
    &-title {
      font-size: 13px;
      color: #FFA765;
      cursor: pointer;
      position: relative;

      &:before {
        content: '';
        width: 100%;
        height: 1px;
        background: #FFA765;
        transition: .25s all ease;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }

      &:hover {
        color: #FF6100;

        &:before {
          opacity: 0;
        }
      }
    }

    &-item {
      padding-left: 8px;
      font-size: 13px;
      color: #74788d;
    }
  }

  &__delimiter {
    margin-right: 8px;
    transform: rotateZ(-90deg);
  }
}

@media screen and (max-width: 550px) {
  .breadcrumbs {
    flex-direction: column;
    justify-content: unset;
    align-items: flex-start;
  }
}
</style>