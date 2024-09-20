<template>
  <div @click="selectStatReward">
    {{ reward.statName }}
    {{ reward.value }}
  </div>
</template>

<script setup lang="ts">
import { getUpdatedCharacterStats } from "~/lib/combat";
import { createStatReward } from "~/lib/reward";
import { useCombatStore } from "~/store/useCombatStore";
import { useGameStore } from "~/store/useGameStore";

const gameStore = useGameStore();
const combatStore = useCombatStore();

const reward = createStatReward(gameStore.activeGame.roundNumber);

const selectStatReward = () => {
  const updatedStats = getUpdatedCharacterStats(combatStore.player.stats, {
    [reward.statName]: reward.value,
  });

  combatStore.player.stats = updatedStats;

  gameStore.startNewRound();
};
</script>

<style></style>
