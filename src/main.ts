import { createApp } from "vue";
import router from "@/Utils/Router/Router";

import AppTemplate from "@/Templates/App/App.vue";

createApp(AppTemplate).use(router).mount("#app");
