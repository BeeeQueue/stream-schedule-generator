import { createApp } from "vue"
import "modern-normalize"

// @ts-ignore: For some reason it can't find the types in this file.
import App from "./App.vue"
import "./themes/dark.css"

createApp(App).mount("#app")
