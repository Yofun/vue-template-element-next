<script setup lang="ts">
import { computed } from 'vue';
import { routes } from '@/router';
const list = computed(() => routes.filter((v) => v.path !== '/'));
</script>

<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <router-link :to="item.path">{{ item.meta.title }}</router-link>
    </li>
  </ul>
</template>
