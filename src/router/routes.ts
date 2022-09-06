import { RouteRecordRaw } from 'vue-router';

import Index from '@/pages/index.vue';
import Lesson001 from '@/pages/lesson001/index.vue';

export type RouterItem = RouteRecordRaw & {
  meta: {
    title: string;
  };
};

const routes: RouterItem[] = [
  {
    path: '/',
    component: Index,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/lesson001',
    component: Lesson001,
    meta: {
      title: '课时一：检测自动换行'
    }
  }
];

export default routes;
