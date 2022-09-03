import { createApp } from 'vue';
import App from './App.vue';

import { createInitial } from '@/config';

// css
import '@/styles/reset.scss';

const app = createApp(App);
app.use(createInitial());
app.mount('#app');
