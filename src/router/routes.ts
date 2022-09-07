import { RouteRecordRaw } from 'vue-router';

export type RouterItem = RouteRecordRaw & {
  children?: RouterItem[];
  meta: {
    title: string;
  };
};

const routes: RouterItem[] = [
  {
    path: '/',
    component: () => import('@/pages/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/lesson001',
    component: () => import('@/pages/lesson001/index.vue'),
    meta: {
      title: '课时一：检测自动换行'
    }
  },
  {
    path: '/lesson002',
    component: () => import('@/pages/lesson002/index.vue'),
    meta: {
      title: '课时二：chrome桌面通知'
    }
  },
  {
    path: '/lesson003',
    component: () => import('@/pages/lesson003/index.vue'),
    meta: {
      title: '课时三：国际化'
    }
  }
];

export default routes;
