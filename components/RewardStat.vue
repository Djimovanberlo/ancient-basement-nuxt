<template>
  <div @click="selectStatReward">
    {{ reward.statName }}
    {{ reward.value }}
  </div>
</template>

<script setup lang="ts">
import { getUpdatedCharacterStats } from "~/lib/combat";
import { useCombatStore } from "~/store/useCombatStore";
import { useGameStore } from "~/store/useGameStore";
import type { StatReward } from "~/types/reward";

interface Props {
  reward: StatReward;
}

const props = defineProps<Props>();

const gameStore = useGameStore();
const combatStore = useCombatStore();

const selectStatReward = () => {
  if (props.reward.isEpic) {
    combatStore.player.epicRewards?.push(props.reward);
  }

  const updatedStats = getUpdatedCharacterStats(combatStore.player.stats, {
    [props.reward.statName]: props.reward.value,
  });

  combatStore.player.stats = updatedStats;

  gameStore.startNewRound();
};
</script>

<style></style>
