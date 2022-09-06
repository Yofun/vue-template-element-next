<script setup lang="ts">
import { ref } from 'vue';
import { useTransation } from '@/config/i18n';
import { useElementLocale } from '@/config/element-ui';

const { t, change, locale } = useTransation();
const localeElement = useElementLocale();

const date = ref('');

const changeLng = () => {
  if (locale.value === 'en-US') {
    change('zh-CN');
  } else {
    change('en-US');
  }
};
</script>

<template>
  <el-config-provider :locale="localeElement">
    <h1>{{ t('app.hello') }}</h1>
    <el-button @click="changeLng">change language</el-button>
    <br />
    <el-date-picker v-model="date" type="date" placeholder="Pick a day" />
  </el-config-provider>
</template>
