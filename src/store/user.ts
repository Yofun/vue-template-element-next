import { reactive } from 'vue';
import { defineStore } from 'pinia';

import { User } from '@/model/user.model';

export const useUserStore = defineStore('user', () => {
  const user = reactive<Partial<User>>({});
  function setUser(u: User) {
    Object.assign(user, u);
  }
  return { user, setUser };
});
