import { computed } from 'vue';
import { createI18n, useI18n } from 'vue-i18n';

import { zh } from './zh-CN';
import { en } from './en-US';

const locale = 'zh-CN';
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
