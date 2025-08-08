<template>
  <div class="enemy">
    <label>STR: {{ combatStore.enemy.stats.strength }}</label>
    <label>INT: {{ combatStore.enemy.stats.intelligence }}</label>
    <label>DEF: {{ combatStore.enemy.stats.defense }}</label>
    <label>RES: {{ combatStore.enemy.stats.resistance }}</label>
    <label>AGI: {{ combatStore.enemy.stats.agility }}</label>
  </div>
</template>

<script setup lang="ts">
import { useCombatStore } from "~/store/useCombatStore";

const combatStore = useCombatStore();
</script>

<style lang="less" scoped>
.enemy {
  display: flex;
  justify-content: center;
}
</style>
