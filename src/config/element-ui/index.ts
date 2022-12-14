import { computed } from 'vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';
import { Language, i18n } from '../i18n';

export function useElementLocale() {
  const elementResource: Record<Language, typeof zhCn> = {
    'zh-CN': zhCn,
    'en-US': en
  };
  return computed(() => elementResource[i18n.global.locale.value]);
}
