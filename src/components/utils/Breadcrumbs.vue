<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Breadcrumbs",
  props: ['pageParent', 'breadcrumbs']
})
</script>

<template>
  <div class="breadcrumbs">
    <RouterLink class="breadcrumbs__title" :to="pageParent.path">{{ pageParent.name }}</RouterLink>
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
      <div v-for="(item, idx) in breadcrumbs" :key="idx">
        <RouterLink class="breadcrumbs__section-item" :to="item?.path" v-if="breadcrumbs.length !== idx + 1">
          <svg
              width="11"
              height="11"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="breadcrumbs__delimiter"
              v-if="idx !== 0"
          >
            <path d="M93.5 174.5L256.5 337.5L419.5 174.5" stroke="black" stroke-width="24" stroke-linecap="round"/>
          </svg>

          {{ item.name }}
        </RouterLink>
        <span class="breadcrumbs__section-title" v-else>
          <svg
              width="11"
              height="11"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="breadcrumbs__delimiter"
              v-if="idx > 0"
          >
           <path d="M93.5 174.5L256.5 337.5L419.5 174.5" stroke="black" stroke-width="24" stroke-linecap="round"/>
          </svg>

          {{ item.name }}
        </span>
      </div>
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
      padding-left: 8px;
      font-size: 13px;
      color: #74788d;
    }

    &-item {
      padding-left: 8px;
      font-size: 13px;
      color: #FFA765;
      position: relative;

      &:before {
        content: '';
        width: calc(100% - 8px);
        height: 1px;
        background: #FFA765;
        transition: .25s all ease;
        position: absolute;
        bottom: 0;
        left: 8px;
        right: 0;
      }

      &:hover {
        color: #FF6100;

        &:before {
          opacity: 0;
        }
      }
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