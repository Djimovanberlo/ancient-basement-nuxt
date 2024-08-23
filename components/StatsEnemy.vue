<template>
  <div class="stats-enemy">
    <Healthbar
      :current-health="enemy.stats.currentHealth"
      :max-health="enemy.stats.maxHealth"
    />
  </div>
</template>

<script setup lang="ts">
import { useCombatStore } from "~/store/useCombatStore";

const { enemy } = useCombatStore();
</script>

<style lang="less" scoped></style>
