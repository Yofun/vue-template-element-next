<script setup lang="ts">
import { useRouterTitle } from '@/router';
import Item from './item.vue';

const title = useRouterTitle();
</script>

<template>
  <h3>{{ title }}</h3>
  <Item content="测试测试" />
  <br />
  <Item
    content="要是前端处理的话我认为不合理。虽然前端也能处理。首先后端给你的内容应该是动态的，也就是这段文本是动态生成的。那么这段文本的来源开始哪里？？我猜测应该是类似从富文本编辑器中“用户”去编写完了传给后端的。传的时候应该是自带标签的。"
  />
</template>
