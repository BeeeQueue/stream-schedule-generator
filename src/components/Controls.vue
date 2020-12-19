<template>
  <aside class="container">
    <span class="draggable" />

    <div class="controls">
      <div v-for="day in days" class="day">
        {{ Weekday[day.weekDay] }}
      </div>
    </div>

    <Button @click="addDay">+</Button>
  </aside>
</template>

<script lang="ts" setup>
import { computed } from "vue"

import { useSchedule } from "../state/schedule"
import { useStore } from "../state/use-store"
import { Weekday } from "../types"

import Button from "./Button.vue"

const { mutations } = useSchedule()
const { state } = useStore()

const days = computed(() => state.schedule.days)

const addDay = () => {
  mutations.setDays([...days.value, Weekday.Monday])
}
</script>

<style scoped>
.container {
  position: relative;
  background: var(--background-primary);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  padding-left: 4px;

  & > .draggable {
    position: absolute;
    width: 4px;
    top: 0;
    left: 0;
    bottom: 0;

    background-image: url(../assets/full-lines.svg);
    background-size: 6px;
    cursor: w-resize;
  }
}
</style>
