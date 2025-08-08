<template>
  <div class="status">
    <StatusButton
      v-for="[statusKey, turns] in filteredStatusTurns"
      :key="statusKey"
      :status-key="statusKey"
      :turns="turns"
    />
  </div>
</template>

<script setup lang="ts">
import { type StatusTurns } from "~/types/status";

interface Props {
  statusTurns: StatusTurns;
}

const props = defineProps<Props>();

const filteredStatusTurns = Object.entries(props.statusTurns).filter(
  ([_, turns]) => turns > 0
);
</script>

<style lang="less" scoped>
.status {
  display: flex;
  gap: 5px;
}
</style>
