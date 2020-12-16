<template>
  <aside class="controls">
    <slot />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Controls",
})
</script>

<style scoped>
.controls {
  background: var(--background-primary);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
</style>
