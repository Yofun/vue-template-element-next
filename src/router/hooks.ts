import { useRoute } from 'vue-router';

export function useRouterTitle() {
  return useRoute().meta.title;
}
