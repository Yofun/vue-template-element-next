<script setup lang="ts">
import { useRouterTitle } from '@/router';
import { useNotification } from '@/hooks/use-notification';
const title = useRouterTitle();
const { notify } = useNotification();
</script>

<template>
  <h3>{{ title }}</h3>
  <button
    @click="
      () => {
        notify();
      }
    "
  >
    通知
  </button>
</template>
