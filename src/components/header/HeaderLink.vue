<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HeaderLink",
  props: ['name', 'path', 'dropdown']
})
</script>

<template>
  <div class="header-link">
    <RouterLink class="header-link__title" :to="path">
      {{ name }}
      <svg width="12" height="12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M93.5 174.5L256.5 337.5L419.5 174.5" stroke="black" stroke-width="24" stroke-linecap="round"/>
      </svg>
    </RouterLink>
    <div class="header-link__dropdown">
      <div class="header-link__dropdown-body">
        <template v-for="link in dropdown" :key="link.id">
          <RouterLink
              class="header-link__dropdown-link"
              :class="{ 'empty': !link.path }"
              :to="link.path"
              v-if="!link.dropdown?.length"
          >
            {{ link.name }}
          </RouterLink>
          <RouterLink class="header-link__dropdown-link link2" :to="link.path" v-else>
            {{ link.name }}
            <svg width="12" height="12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M93.5 174.5L256.5 337.5L419.5 174.5" stroke="black" stroke-width="24" stroke-linecap="round"/>
            </svg>
            <div class="header-link__dropdown second-dropdown">
              <RouterLink
                  class="header-link__dropdown-link"
                  :class="{ 'empty': !link.path }"
                  v-for="link2 in link.dropdown"
                  :key="link2.id"
                  :to="link2.path"
              >
                {{ link2.name }}
              </RouterLink>
            </div>
          </RouterLink>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/components/header/headerLink";
</style>