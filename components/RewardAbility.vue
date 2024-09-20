<template>
  <div @click="selectAbilityReward" class="reward-ability">
    {{ ability.name }}
  </div>
</template>

<script setup lang="ts">
import { createAbilityReward } from "~/lib/reward";
import { useCombatStore } from "~/store/useCombatStore";
import { useGameStore } from "~/store/useGameStore";
import type { Ability } from "~/types/ability";

interface Props {
  ability: Ability;
}

defineProps<Props>();

// const gameStore = useGameStore();
// const combatStore = useCombatStore();

// const abilityReward = createAbilityReward(gameStore.activeGame.roundNumber);

const selectAbilityReward = () => {
  // const abilitiesCopy = [...combatStore.player.abilities];
  // combatStore.player.abilities = [...abilitiesCopy, abilityReward];
  // gameStore.startNewRound();
};
</script>

<style>
.rewardAbility {
  border: 2px solid blue;
}
</style>
