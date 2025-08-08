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
@max-height: 576px;

main {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

.container {
  // Change these for future viewports. Currently only portrait view on small screens is supported.
  height: 100svh;
  width: 100%;

  background-color: #f0f0f0;
  border: 3px solid rgb(13, 1, 90);
}
</style>
