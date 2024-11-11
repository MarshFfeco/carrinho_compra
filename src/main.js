import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoCart, BiGithub } from "oh-vue-icons/icons";

addIcons(CoCart, BiGithub);

createApp(App)
    .component("v-icon", OhVueIcon)
    .use(router)
    .mount('#app')
