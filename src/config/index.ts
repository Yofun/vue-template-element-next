import { App } from 'vue';

export function createInitial() {
  return {
    install(app: App) {
      // eslint-disable-next-line no-console
      console.log(app);
    }
  };
}
