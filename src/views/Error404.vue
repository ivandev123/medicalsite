<template>
  <div class="comingcontainer">
    <div class="checkbacksoon">
      <p>
        <span class="go3d">4</span>
        <span class="go3d">0</span>
        <span class="go3d">4</span>
        <span class="go3d">!</span>

      </p>

      <p class="error">
        Похоже, вы выбрали неправильный путь.
        <br>
        Не волнуйтесь, время от времени, это случается с каждым из нас.
      </p>
      <nav>
        <ul>
          <li><RouterLink to="/">Главная</RouterLink></li>
        </ul>
      </nav>

    </div>
  </div>
</template>

<script>
export default {
  name: "Error404"
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/views/error404";
</style>