<script setup lang="ts">
import { ref, watch, nextTick, defineProps } from 'vue';

// eslint-disable-next-line vue/no-setup-props-destructure
const { content } = defineProps({
  content: {
    type: String,
    required: true
  }
});

const isNewline = ref(false);

const realRef = ref();

const shodowRef = ref();

watch(
  () => content,
  () => {
    nextTick(() => {
      isNewline.value = realRef.value?.getBoundingClientRect().height < shodowRef.value?.getBoundingClientRect().height;
    });
  },
  { immediate: true }
);
</script>

<template>
  <div v-bind="$attrs">
    <p>
      是否换行: <span :style="{ color: 'red' }">{{ isNewline ? '是' : '否' }}</span>
    </p>
    <div class="content">
      <p class="newline" ref="realRef">{{ content }}</p>
      <p class="shadow" ref="shodowRef">{{ content }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.newline {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.content {
  position: relative;
}

.shadow {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
</style>
