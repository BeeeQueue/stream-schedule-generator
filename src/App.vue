<template>
  <Layout v-if="user != null">
    <div class="result" />

    <Sidebar />
  </Layout>
  <Login v-else />
</template>

<script lang="ts" setup>
import { computed } from "vue"

import Layout from "./components/Layout.vue"
import Login from "./components/Login.vue"
import Sidebar from "./modules/sidebar/Sidebar.vue"
import { useApp } from "./state/app"
import { supabase } from "./supabase"

const {
  state: appState,
  mutations: { updateSession },
} = useApp()

const user = computed(() => appState.session?.user ?? null)

supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session?.user.email)
  updateSession(session)
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
  font-family: "Raleway", sans-serif;
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

input {
  padding: 8px 15px;

  border-radius: 5px;
  background: var(--background-action);
  border: 2px solid var(--black-300);
}
</style>
