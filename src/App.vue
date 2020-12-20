<template>
  <Layout>
    <div class="result" />

    <Sidebar />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import Layout from "./components/Layout.vue"
import Sidebar from "./modules/sidebar/Sidebar.vue"

export default defineComponent({
  name: "App",
  components: {
    Sidebar,
    Layout,
  },
})
</script>

<style>
:root {
  --no-box-shadow: 0 0 transparent;
  --no-box-shadow-inset: inset 0 0 transparent;
}

body {
  background: var(--background-primary);
}

* {
  box-sizing: border-box;
  outline: none !important;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button,
#app {
  color: var(--text-primary);
  font-size: 16px;
}
</style>
