<template>
  <h1>Hello World!</h1>
  <p>{{ a }}</p>
  <p>{{ user.name }}</p>
  <p>{{ user.age }}</p>
  <p>{{ user.sex }}</p>
  <el-button @click="() => setUser({ name: '李四', age: 20, sex: '女' })">哈哈哈</el-button>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store';
const { user, setUser } = useUserStore();
const a = 111;
</script>
