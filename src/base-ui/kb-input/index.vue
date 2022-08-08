<template>
  <div class="kb-input" :style="inputStyle">
    <template v-if="icon">
      <kb-icon :name="icon"></kb-icon>
    </template>
    <input
      :placeholder="placeholder"
      :type="type"
      :password="isPasswordType"
      class="input"
      placeholder-class="placeholderStyle"
    />
  </div>
</template>

<script setup lang="ts">
import { inputType } from "@/types";
const props = withDefaults(
  defineProps<{
    icon?: string;
    type?: inputType | "password";
    inputBgc?: string;
    placeholder?: string;
  }>(),
  {
    inputBgc: "#fff",
    type: "text",
    icon: "gongsimingcheng",
  }
);

const isPasswordType = computed(() => {
  return props.type === "password" ? true : false;
});

const inputStyle = computed(() => {
  const style = {
    "background-color": props.inputBgc,
  };
  return style;
});
</script>

<style>
.kb-input {
  display: flex;
  align-items: center;
  border-radius: 80rpx;
  padding: 0 20rpx;
}
.kb-input .input {
  padding: 20rpx;
  flex: 1;
}
.placeholderStyle {
  color: #6f71ca !important;
  font-size: 26rpx !important;
}
</style>
