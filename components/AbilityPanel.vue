<template>
  <div class="ability-panel">
    <button
      v-for="ability in combatStore.player.abilities"
      :key="ability"
      @click="handleAbility(ability)"
    >
      {{ ability }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCombatStore } from "~/store/useCombatStore";
import type { AbilityName } from "~/types/ability";

const combatStore = useCombatStore();

const handleAbility = (ability: AbilityName) => {
  if (combatStore.playerCanAct) {
    combatStore.executeTurn(ability);
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/panel.less";

.ability-panel {
  display: grid;
  .panel-brown();

  button {
    margin-left: auto;
  }
}
</style>
