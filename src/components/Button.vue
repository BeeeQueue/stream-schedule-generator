<template>
  <button type="button" :class="{ active }" @click="$emit('click')">
    <span class="contents">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Button",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
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

  & > .contents {
    display: inline-block;
    transition: font-size 75ms;
  }

  &:hover,
  &:active,
  &.active {
    color: var(--text-primary-hover);
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.75);
  }

  &:active,
  &.active {
    box-shadow: /* TL inset shine */ var(--no-box-shadow-inset),
      /* TL inset shadow */ inset 4px 4px 8px -3px rgba(0, 0, 0, 0.75),
      /* BR shadow */ var(--no-box-shadow),
      /* BR inset shine */ inset -2px -2px 5px rgba(81, 81, 81, 0.5);

    & > .contents {
      font-size: 0.95em;
    }
  }
}
</style>
