<template>
  <aside class="sidebar-container">
    <span class="draggable" />

    <div class="controls">
      <div v-for="(day, i) in days" :key="i" class="day">
        {{ day.title }}
      </div>
    </div>

    <Button @click="addDay">+</Button>

    <Tabs />
  </aside>
</template>

<script lang="ts" setup>
import { computed } from "vue"

import Button from "../../components/Button.vue"
import { useSchedule } from "../../state/schedule"

import Tabs from "./Tabs.vue"

const { state, mutations } = useSchedule()

const days = computed(() => state.days)

const addDay = () => {
  mutations.setDays([
    ...days.value,
    {
      datetime: new Date("2020-12-24 04:00"),
      title: "A stream",
      subtitle: null,
    },
  ])
}
</script>

<style scoped>
.sidebar-container {
  position: relative;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: var(--background-primary);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  padding-left: 4px;

  & > .draggable {
    position: absolute;
    width: 4px;
    top: 0;
    left: 0;
    bottom: 0;

    background-image: url(../../assets/full-lines.svg);
    background-size: 6px;
    cursor: w-resize;
  }
}
</style>
