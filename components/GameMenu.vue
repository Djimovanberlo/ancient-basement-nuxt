<template>
  <div class="game-menu">
    <button @click="gameStore.startGame()">Start game</button>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from "~/store/useGameStore";

const gameStore = useGameStore();
</script>

<style lang="less">
.game-menu {
  width: 100%;
  height: 100%;
}
</style>
