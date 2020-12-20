<template>
  <div class="tabs-container">
    <Button
      v-for="tab in SidebarTab"
      :key="tab"
      :active="activeTab === tab"
      @click="mutations.switchTab(tab)"
    >
      {{ tab }}
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue"

import Button from "../../components/Button.vue"
import { SidebarTab, useSidebar } from "../../state/sidebar"

const { state, mutations } = useSidebar()

const activeTab = computed(() => state.activeTab)
</script>

<style scoped>
.tabs-container {
  position: relative;
  margin-top: auto;

  width: 100%;
  display: flex;

  & > button {
    flex: 1;
    border-radius: 0;
  }
}
</style>
