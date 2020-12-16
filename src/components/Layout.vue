<template>
  <div class="layout">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Layout",
})
</script>

<style scoped>
.layout {
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 400px;
  grid-template-rows: 100%;
}
</style>
