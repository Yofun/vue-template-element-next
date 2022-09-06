<script setup lang="ts">
import { useElementLocale } from '@/config/element-ui';
const localeElement = useElementLocale();
</script>

<template>
  <el-config-provider :locale="localeElement">
    <div :style="{ padding: '20px' }">
      <router-view></router-view>
    </div>
  </el-config-provider>
</template>
