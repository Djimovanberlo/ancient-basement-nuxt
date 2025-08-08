<template>
  <Button
    v-if="turns > 0"
    v-on:click="tooltipContent = statusKey"
    v-on:mouseover="tooltipContent = statusKey"
    v-on:mouseleave="tooltipContent = ''"
    v-on:focus="tooltipContent = statusKey"
    variant="square"
    size="sm"
  >
    {{ statusKey.charAt(0) }}{{ turns }}
  </Button>
</template>

<script setup lang="ts">
import useSafeInject from "~/lib/useSafeInject";

interface Props {
  statusKey: string;
  turns: number;
}

defineProps<Props>();

const tooltipContent = useSafeInject<Ref<string>>("tooltipContent");
</script>

<style lang="less" scoped>
.status-button {
  all: unset;
  height: 1.5rem;
  aspect-ratio: 1/1;
  padding: 0.2rem;
  text-align: center;
  background-color: #444;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}
</style>
