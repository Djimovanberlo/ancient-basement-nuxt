<template>
  <div class="stats-player">
    <Healthbar
      :current-health="player.stats.currentHealth"
      :max-health="player.stats.maxHealth"
    />
  </div>
</template>

<script setup lang="ts">
import { useCombatStore } from "~/store/useCombatStore";

const { player } = useCombatStore();
</script>

<style lang="less" scoped></style>
