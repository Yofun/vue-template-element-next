<script setup lang="ts">
import { ref, watch, toRefs, nextTick } from 'vue';

const props = defineProps({
  content: {
    type: String,
    required: true
  }
});
const { content } = toRefs(props);

const isNewline = ref(false);
const realRef = ref<HTMLElement>();
const shodowRef = ref<HTMLElement>();

watch(
  () => content,
  () => {
    nextTick(() => {
      if (realRef.value && shodowRef.value) {
        isNewline.value = realRef.value.getBoundingClientRect().height < shodowRef.value.getBoundingClientRect().height;
      }
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
      <p ref="realRef" class="newline">
        {{ content }}
      </p>
      <p ref="shodowRef" class="shadow">
        {{ content }}
      </p>
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
