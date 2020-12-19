import { createApp } from "vue"
import "modern-normalize"

// @ts-ignore: For some reason it can't find the types in this file.
import App from "./App.vue"
import { store } from "./state/store"
import "./themes/dark.css"
import { key } from "./state/use-store"

const app = createApp(App)

app.use(store, key)

app.mount("#app")
