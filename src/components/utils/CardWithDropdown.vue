<template>
  <div class="card-with-dropdown">
    <div class="card-with-dropdown__content" :class="{ 'active': open }" @click="open = !open">
      <svg width="21" height="21" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-with-dropdown__arrow">
        <path d="M93.5 174.5L256.5 337.5L419.5 174.5" stroke="#FFFFFF" stroke-width="60" stroke-linecap="round"/>
      </svg>

      <div class="card-with-dropdown__title">{{ title }}</div>
    </div>
    <Transition name="dropdown">
      <div class="card-with-dropdown__dropdown" v-show="open">
        <table>
          <tbody>
          <tr v-for="item in dropdown" :key="item.id">
            <td>{{ item.name }}</td>
            <td style="width: 14%;">
              <div>
                <span>{{ +item.price ? `от ${item.price}₽` : 'Бесплатно' }}</span>
              </div>
            </td>
            <td>
              <RouterLink :to="item.path">заказать</RouterLink>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "CardWithDropdown",
  props: ['title', 'dropdown'],
  data() {
    return {
      open: false,
    }
  }
}
</script>

<style scoped lang="scss">
.card-with-dropdown {

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-radius: 20px;
    background: #24c8bc;
    cursor: pointer;
    position: relative;

    &.active {
      border-radius: 20px 20px 0 0;

      & .card-with-dropdown {
        &__arrow {
          transform: rotateZ(0deg);
        }
      }
    }
  }

  &__arrow {
    margin: auto;
    transform: rotateZ(-90deg);
    transition: .35s all ease;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50px;
  }

  &__title {
    margin: 0 auto;
    font-weight: 600;
    font-size: 18px;
    color: #FFFFFF;
  }

  &__dropdown {
    overflow: hidden;

    & > table {
      width: 100%;
      border: none;
      border-collapse: collapse;

      & tr {
        &:nth-child(odd) {
          background: #FFFFFF;
        }

        &:nth-child(even) {
          background: rgba(255, 167, 101, .15);
        }

        & > td {
          padding: 14px 30px;
          border-top: 1px solid #dee2e6;
          border-bottom: 1px solid #f8f8f8;
          vertical-align: top;
          font-size: 16px;

          & > a {
            font-size: 14px;
            color: #FF6100;
            text-transform: uppercase;
          }

          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: height 0.5s;
}
.dropdown-enter,
.dropdown-leave-to {
  height: 0;
  overflow: hidden;
}
</style>