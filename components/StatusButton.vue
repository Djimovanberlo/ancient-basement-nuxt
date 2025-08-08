<template>
  <button
    v-if="turns > 0"
    v-on:click="combatStore.tooltipContent = statusKey"
    v-on:mouseover="combatStore.tooltipContent = statusKey"
    v-on:mouseleave="combatStore.tooltipContent = ''"
    v-on:focus="combatStore.tooltipContent = statusKey"
    class="status-button"
  >
    {{ statusKey.charAt(0) }}{{ turns }}
  </button>
</template>

<script setup lang="ts">
import { useCombatStore } from "~/store/useCombatStore";

interface Props {
  statusKey: string;
  turns: number;
}

defineProps<Props>();

const combatStore = useCombatStore();
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
