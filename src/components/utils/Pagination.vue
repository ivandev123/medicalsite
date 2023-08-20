<template>
  <div class="pagination">
    <div class="pagination__prev" @click="selectedNum > 1 ? selectedNum-- : selectedNum = 1">
      <svg width="9" height="5.5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.235034 0.204742C0.536173 -0.0796667 1.01085 -0.0661045 1.29526 0.235034L5 4.1577L8.70474 0.235034C8.98915 -0.0661045 9.46383 -0.0796667 9.76497 0.204742C10.0661 0.489151 10.0797 0.963831 9.79526 1.26497L5.54526 5.76497C5.40358 5.91499 5.20635 6 5 6C4.79366 6 4.59642 5.91499 4.45474 5.76497L0.204742 1.26497C-0.0796667 0.963831 -0.0661045 0.489151 0.235034 0.204742Z" fill="#4B535A"/>
      </svg>
    </div>
    <div class="pagination__numbers">
      <div
          class="pagination__number"
          :class="{ 'active': selectedNum === num }"
          v-for="(num, idx) in count < 6 ? count : getNumbers"
          :key="idx"
          @click="selectedNum = num"
      >
        {{ num }}
      </div>
      <template v-if="count > 5">
        <span v-if="getNumbers.length >= 5 && !getNumbers.includes(count)">...</span>
        <div
            class="pagination__number"
            :class="{ 'active': selectedNum === count }"
            @click="selectedNum = count"
            v-if="!getNumbers.includes(count)"
        >{{ count }}</div>
      </template>
    </div>
    <div class="pagination__next" @click="selectedNum < count ? selectedNum++ : selectedNum = count">
      <svg width="9" height="5.5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.235034 0.204742C0.536173 -0.0796667 1.01085 -0.0661045 1.29526 0.235034L5 4.1577L8.70474 0.235034C8.98915 -0.0661045 9.46383 -0.0796667 9.76497 0.204742C10.0661 0.489151 10.0797 0.963831 9.79526 1.26497L5.54526 5.76497C5.40358 5.91499 5.20635 6 5 6C4.79366 6 4.59642 5.91499 4.45474 5.76497L0.204742 1.26497C-0.0796667 0.963831 -0.0661045 0.489151 0.235034 0.204742Z" fill="#4B535A"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      selectedNum: 1
    }
  },
  computed: {
    getNumbers() {
      let count = []

      for (let i = 0; i < this.count; i++) count.push(i + 1)
      const idx = count.indexOf(this.selectedNum)

      return count.slice(idx ? idx - 1 : idx, idx ? idx + 4 : idx + 5)
    }
  },
  watch: {
    selectedNum() {
      this.$emit('set-active-page', this.selectedNum)
    }
  }
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  &__prev {
    transform: rotateZ(90deg);
    cursor: pointer;
  }

  &__next {
    transform: rotateZ(-90deg);
    cursor: pointer;
  }

  &__numbers {
    display: flex;
    align-items: center;
    column-gap: 13.5px;
    padding: 0 10px 0 17px;

    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 17px;
      height: 19px;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      color: #4B535A;
    }
  }

  &__number {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    border-radius: 5px;
    font-weight: 600;
    line-height: 19px;
    color: #4B535A;
    cursor: pointer;
    transition: .25s;

    &.active,
    &:hover {
      background: #24C8BC;
      color: #FFFFFF;
      transition: .25s;
    }
  }
}
</style>