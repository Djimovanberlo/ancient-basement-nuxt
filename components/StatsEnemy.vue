<template>
  <div class="stats-enemy">
    <Healthbar
      :current-health="combatStore.enemy.stats.currentHealth"
      :max-health="combatStore.enemy.stats.maxHealth"
    />
  </div>
</template>

<script setup lang="ts">
import { useCombatStore } from "~/store/useCombatStore";

const combatStore = useCombatStore();
</script>

<style lang="less" scoped>
@import "../assets/css/panel.less";

.stats-enemy {
  padding: 30px;
  .panel-brown();
}
</style>
