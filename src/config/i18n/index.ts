import { computed } from 'vue';
import { createI18n, useI18n } from 'vue-i18n';

import zh from '@/locales/zh-CN/index.json';
import en from '@/locales/en-US/index.json';

// types
export type Keys = keyof typeof zh;
export type Language = keyof typeof resource;

// vars
const locale: Language = 'zh-CN';
export const resource = {
  'zh-CN': zh,
  'en-US': en
};

export const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: locale,
  messages: resource
});

export function useTransation() {
  const locale = computed(() => i18n.global.locale.value);
  function change(locale: keyof typeof resource) {
    i18n.global.locale.value = locale;
  }
  const { t } = useI18n<{ message: typeof zh }>({ useScope: 'global' });
  return { t, locale, change };
}
