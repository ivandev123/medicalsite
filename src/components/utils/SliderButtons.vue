<template>
  <div class="slider-buttons">
    <button class="slider-buttons__prev" @click="$emit('prev')">
      <svg width="14.4" height="8" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.235034 0.204742C0.536173 -0.0796667 1.01085 -0.0661045 1.29526 0.235034L5 4.1577L8.70474 0.235034C8.98915 -0.0661045 9.46383 -0.0796667 9.76497 0.204742C10.0661 0.489151 10.0797 0.963831 9.79526 1.26497L5.54526 5.76497C5.40358 5.91499 5.20635 6 5 6C4.79366 6 4.59642 5.91499 4.45474 5.76497L0.204742 1.26497C-0.0796667 0.963831 -0.0661045 0.489151 0.235034 0.204742Z" fill="#FFA765"/>
      </svg>
    </button>
    <img src="@/assets/images/carousel-buttons-line.png" alt="|" class="slider-buttons__line">
    <button class="slider-buttons__next" @click="$emit('next')">
      <svg width="14.4" height="8" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.235034 0.204742C0.536173 -0.0796667 1.01085 -0.0661045 1.29526 0.235034L5 4.1577L8.70474 0.235034C8.98915 -0.0661045 9.46383 -0.0796667 9.76497 0.204742C10.0661 0.489151 10.0797 0.963831 9.79526 1.26497L5.54526 5.76497C5.40358 5.91499 5.20635 6 5 6C4.79366 6 4.59642 5.91499 4.45474 5.76497L0.204742 1.26497C-0.0796667 0.963831 -0.0661045 0.489151 0.235034 0.204742Z" fill="#FFA765"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "SliderButtons"
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/utils/sliderButtons";
</style>