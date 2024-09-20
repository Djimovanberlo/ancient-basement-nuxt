<template>
  <div class="reward-ability">
    {{ abilityReward }}
  </div>
</template>

<script setup lang="ts">
import { createAbilityReward } from "~/lib/reward";
import { useGameStore } from "~/store/useGameStore";

const gameStore = useGameStore();

const abilityReward = createAbilityReward(gameStore.activeGame.roundNumber);
</script>

<style>
.rewardAbility {
  border: 2px solid blue;
}
</style>
