<template>
  <div v-if="combatStore.tooltipContent" class="tooltip" ref="tooltipRef">
    <p>{{ combatStore.tooltipContent }}</p>
  </div>
</template>

<script setup lang="ts">
import { useCombatStore } from "~/store/useCombatStore";

const combatStore = useCombatStore();
const tooltipRef = ref<HTMLDivElement>();

onClickOutside(tooltipRef, () => {
  combatStore.tooltipContent = "";
});
</script>

<style lang="less" scoped>
@import "../assets/css/panel.less";

.tooltip {
  padding: 30px;
  .panel-brown();
}
</style>
