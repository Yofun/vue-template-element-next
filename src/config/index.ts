import { App } from 'vue';
import { createPinia } from 'pinia';
import { i18n } from './i18n';

export function createInitial() {
  return {
    install(app: App) {
      app.use(createPinia());
      app.use(i18n);
    }
  };
}
