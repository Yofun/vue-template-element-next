<script setup lang="ts">
import { ref } from 'vue';
import { useRouterTitle } from '@/router';
import { useTransation } from '@/config/i18n';

const { t, change, locale } = useTransation();
const title = useRouterTitle();
const date = ref('');
const pagination = ref('');

const handleChangeLangue = () => {
  if (locale.value === 'en-US') {
    change('zh-CN');
  } else {
    change('en-US');
  }
};
</script>

<template>
  <h3>{{ title }} <el-button @click="handleChangeLangue">切换语言</el-button></h3>
  <br />
  <br />
  <h4>{{ t('app.hello') }}</h4>
  <el-date-picker v-model="date" type="date" :placeholder="t('date.picker.placeholder')" />
  <br />
  <el-pagination
    v-model:currentPage="pagination"
    :page-size="100"
    layout="total, prev, pager, next,jumper"
    :total="1000"
  />
</template>
