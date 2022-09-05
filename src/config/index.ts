import { App } from 'vue';
import { createPinia } from 'pinia';

export function createInitial() {
  return {
    install(app: App) {
      app.use(createPinia());
      // eslint-disable-next-line no-console
      console.log(app);
    }
  };
}
