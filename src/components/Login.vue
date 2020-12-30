<template>
  <transition>
    <div class="backdrop">
      <div class="login-modal">
        Login

        <input v-model="username" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />

        <Button @click="login(username, password)">Login</Button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref } from "vue"

import { useApp } from "../state/app"

const {
  actions: { login },
} = useApp()

const username = ref("")
const password = ref("")
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);

  & > .login-modal {
    padding: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    text-align: center;
    border-radius: 10px;
    border: 2px solid var(--black-300);
    background: var(--background-primary);
    box-shadow: 0 4px 15px black;
  }
}
</style>
