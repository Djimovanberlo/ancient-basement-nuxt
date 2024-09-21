<template>
  <!-- <div @click="selectStatReward"> -->
  <div>
    {{ reward.statName }}
    {{ reward.value }}
  </div>
</template>

<script setup lang="ts">
import { getUpdatedCharacterStats } from "~/lib/combat";
// import { createStatReward } from "~/lib/reward";
import { useCombatStore } from "~/store/useCombatStore";
import { useGameStore } from "~/store/useGameStore";
import type { StatReward } from "~/types/reward";

interface Props {
  reward: StatReward;
}

defineProps<Props>();

const gameStore = useGameStore();
const combatStore = useCombatStore();

// const selectStatReward = () => {
//   const updatedStats = getUpdatedCharacterStats(combatStore.player.stats, {
//     [reward.statName]: reward.value,
//   });

//   combatStore.player.stats = updatedStats;

//   gameStore.startNewRound();
// };
</script>

<style></style>
