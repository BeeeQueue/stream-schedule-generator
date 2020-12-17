<template>
  <aside class="container">
    <span class="draggable" />

    <div class="controls">
      <div v-for="day in state.schedule.days" class="day">
        {{ Weekday[day.weekDay] }}
      </div>
    </div>

    <Button @click="addDay">+</Button>
  </aside>
</template>

<script lang="ts" setup>
import { useStore } from "../state/store"
import { Weekday } from "../types"

import Button from "./Button.vue"

const { state, commit } = useStore()

const addDay = () => {
  commit("testMutation")
  commit("testMutation2", "")

  // commit("testMutation2", [
  //   ...state.schedule.days,
  //   {
  //     weekDay: Weekday.Sunday,
  //     utcTime: "00:00",
  //     title: "SOMA",
  //     subtitle: "oh god",
  //   },
  // ])
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
