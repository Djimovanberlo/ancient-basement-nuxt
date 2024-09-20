<template>
  <div>
    {{ reward.stat }}
    {{ reward.value }}
  </div>
</template>

<script setup lang="ts">
import { createStatReward } from "~/lib/reward";
import { useGameStore } from "~/store/useGameStore";

const gameStore = useGameStore();

const reward = createStatReward(gameStore.activeGame.roundNumber);
</script>

<style></style>
