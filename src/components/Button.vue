<template>
  <button type="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Button",
  emits: ["click"],
})
</script>

<style scoped>
button {
  padding: 12px 18px;

  border: 0;
  border-radius: 6px;
  background: var(--background-action);
  box-shadow: /* TL inset shine */ inset 4px 4px 4px -3px rgba(81, 81, 81, 0.5),
    /* TL inset shadow */ var(--no-box-shadow-inset),
    /* BR shadow */ 2px 2px 10px rgba(0, 0, 0, 0.75),
    /* BR inset shine */ var(--no-box-shadow-inset);

  cursor: pointer;

  transition: 0.15s color, 0.15s background, 0.15s text-shadow, 75ms box-shadow;

  &:hover {
    color: var(--text-primary-hover);
    text-shadow: 0 0 8px var(--text-primary-hover);
  }

  &:active {
    box-shadow: /* TL inset shine */ var(--no-box-shadow-inset),
      /* TL inset shadow */ inset 4px 4px 8px -3px rgba(0, 0, 0, 0.75),
      /* BR shadow */ var(--no-box-shadow),
      /* BR inset shine */ inset -2px -2px 5px rgba(81, 81, 81, 0.5);
  }
}
</style>
