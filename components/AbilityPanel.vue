<template>
  <div class="ability-panel">
    <button
      v-for="ability in combatStore.player.abilities"
      :key="ability"
      @click="combatStore.executePlayerAbility(ability)"
    >
      {{ ability }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCombatStore } from "~/store/useCombatStore";

const combatStore = useCombatStore();
</script>

<style lang="less" scoped>
.ability-panel {
  display: grid;
  background-color: lightgray;

  button {
    margin-left: auto;
  }
}
</style>
