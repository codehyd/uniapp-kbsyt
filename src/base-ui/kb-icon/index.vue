<template>
  <div class="kb-icon iconfont" :class="`icon-${name}`"></div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
  }>(),
  {}
);
</script>

<style scoped>
.kb-icon {
  display: inline-flex;
}
</style>
