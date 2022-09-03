import { createApp } from 'vue';
import App from './App.vue';

import { createInitial } from '@/config';

// css
import '@/styles/reset.scss';
createInitial();

const app = createApp(App);
app.mount('#app');
