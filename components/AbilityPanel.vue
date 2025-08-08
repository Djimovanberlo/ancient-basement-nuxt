<template>
  <div class="ability-panel">
    <AbilityButton
      v-for="ability in combatStore.player.abilities"
      :key="ability"
      :ability="ability"
    />
  </div>
</template>

<script setup lang="ts">
import { useCombatStore } from "~/store/useCombatStore";

const combatStore = useCombatStore();
</script>

<style lang="less" scoped>
@import "../assets/css/panel.less";

.ability-panel {
  overflow-x: auto;
  display: flex;
  gap: 0.5rem;

  .panel-brown();
}
</style>
