<template>
  <main>
    <div class="container">
      <GameActive v-if="gameStore.gameState === 'active'" />
      <GameDefeat v-else-if="gameStore.gameState === 'defeat'" />
      <GameVictory v-else-if="gameStore.gameState === 'victory'" />
      <GameMenu v-else-if="gameStore.gameState === 'menu'" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useGameStore } from "~/store/useGameStore";

const gameStore = useGameStore();
</script>

<style lang="less" scoped>
@max-width: 1024px;
// @max-height: 576px; //16:9
@max-height: 768px; //4:3

main {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

.container {
  height: min(90vh, @max-height);
  width: min(90vw, @max-width);

  background-color: #f0f0f0;
  border: 3px solid rgb(13, 1, 90);
}
</style>
