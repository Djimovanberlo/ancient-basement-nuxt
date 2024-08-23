<template>
  <div class="enemy">
    <label>STR: {{ enemy.stats.strength }}</label>
    <label>INT: {{ enemy.stats.intelligence }}</label>
    <label>DEF: {{ enemy.stats.defense }}</label>
    <label>RES: {{ enemy.stats.resistance }}</label>
    <label>AGI: {{ enemy.stats.agility }}</label>
  </div>
</template>

<script setup lang="ts">
import { useCombatStore } from "~/store/useCombatStore";

const { enemy } = useCombatStore();
</script>

<style lang="less" scoped>
.enemy {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
