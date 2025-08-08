<template>
  <button v-bind="$attrs" class="button" :class="[size, variant]">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant: "regular" | "square";
  size: "sm" | "md" | "lg";
}>();
</script>

<style lang="less" scoped>
.button {
  all: unset;
  padding: 0.2rem;
  text-align: center;
  background-color: #444;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;

  &.sm {
    height: 1.5rem;
  }

  &.md {
    height: 4rem;
  }

  &.regular&.sm {
    width: 4rem;
  }

  &.regular&.md {
    width: 6rem;
  }

  &.square {
    aspect-ratio: 1/1;
  }
}
</style>
