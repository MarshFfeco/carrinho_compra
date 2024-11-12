import { createApp } from 'vue'
import './style.css'
import '@splidejs/vue-splide/css/sea-green';
import App from './App.vue'
import router from './router'

import VueSplide from '@splidejs/vue-splide';

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoCart, BiGithub } from "oh-vue-icons/icons";

addIcons(CoCart, BiGithub);

createApp(App)
    .use(VueSplide)
    .component("v-icon", OhVueIcon)
    .use(router)
    .mount('#app')
