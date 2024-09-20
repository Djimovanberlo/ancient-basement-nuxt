<template>
  <div class="stats-player">
    <Healthbar
      :current-health="combatStore.player.stats.currentHealth"
      :max-health="combatStore.player.stats.maxHealth"
    />
  </div>
</template>

<script setup lang="ts">
import { useCombatStore } from "~/store/useCombatStore";

const combatStore = useCombatStore();
</script>

<style lang="less" scoped></style>
