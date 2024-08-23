<template>
  <div class="player">
    <label>STR: {{ player.stats.strength }}</label>
    <label>INT: {{ player.stats.intelligence }}</label>
    <label>DEF: {{ player.stats.defense }}</label>
    <label>RES: {{ player.stats.resistance }}</label>
    <label>AGI: {{ player.stats.agility }}</label>
  </div>
</template>

<script setup lang="ts">
import { useCombatStore } from "~/store/useCombatStore";

const { player } = useCombatStore();
</script>

<style lang="less" scoped>
.player {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
