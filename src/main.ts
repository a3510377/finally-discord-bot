import { createApp } from "vue"
import App from "./App.vue"
import router from "./routers"
import store from "./store"
import "virtual:windi.css"

createApp(App).use(store).use(router).mount("#app")
