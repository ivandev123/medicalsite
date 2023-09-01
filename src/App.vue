<template>
  <RouterView/>
</template>

<script>
export default {
  name: "App",
  watch: {
    '$route.path'() {
      document.body.style.overflow = null;
      window.scrollTo(0, 0)
    }
  }
}
</script>
