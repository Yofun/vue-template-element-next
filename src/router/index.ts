import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

export { default as routes } from './routes';
export * from './hooks';

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
