<template>
  <div class="game-active">
    <RoundActive v-if="gameStore.roundState === 'active'" />
    <RoundReward v-else-if="gameStore.roundState === 'reward'" />
  </div>
</template>

<script setup>
import { useGameStore } from "~/store/useGameStore";

const gameStore = useGameStore();
</script>

<style lang="less">
.game-active {
  width: 100%;
  height: 100%;
}
</style>
