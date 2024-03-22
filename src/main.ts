import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';

import App from './App.vue';

import router from './router';

const app = createApp(App);

axios.defaults.baseURL = 'test-front.framework.team';
app.config.globalProperties.$axios = axios;


app.use(createPinia());
app.use(router);
// app.use(axios, {
//   baseUrl: 'https://test-front.framework.team',
// });

app.mount('#app');
