<template>
  <div class="game-menu">
    <Button variant="regular" size="md" @click="gameStore.startGame()">
      Start game
    </Button>
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
