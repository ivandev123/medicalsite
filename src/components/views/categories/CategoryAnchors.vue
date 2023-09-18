<template>
  <div class="category-anchors">
    <Button
        v-for="anchor in anchors"
        :key="anchor.id"
        :name="anchor.name"
        @click="$emit('anchor', anchor.blockId)"
    />
  </div>
</template>

<script>
import Button from "@/components/utils/Button.vue";

export default {
  name: "CategoryAnchors",
  components: {Button},
  emits: ['anchor'],
  props: ['anchors']
}
</script>

<style scoped lang="scss">
.category-anchors {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>