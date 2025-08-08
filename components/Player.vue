<template>
  <div class="player">
    <label>STR: {{ combatStore.player.stats.strength }}</label>
    <label>INT: {{ combatStore.player.stats.intelligence }}</label>
    <label>DEF: {{ combatStore.player.stats.defense }}</label>
    <label>RES: {{ combatStore.player.stats.resistance }}</label>
    <label>AGI: {{ combatStore.player.stats.agility }}</label>
  </div>
</template>

<script setup lang="ts">
import { useCombatStore } from "~/store/useCombatStore";

const combatStore = useCombatStore();
</script>

<style lang="less" scoped>
.player {
  display: flex;
  justify-content: center;
}
</style>
