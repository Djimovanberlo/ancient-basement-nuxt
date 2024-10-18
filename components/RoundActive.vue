<template>
  <div class="round-active">
    <AbilityPanel />
    <Player />
    <Enemy />
    <StatsPlayer />
    <StatsEnemy />
    <div>R: {{ gameStore.activeGame.roundNumber }}</div>
    <div>T: {{ gameStore.activeGame.turnNumber }}</div>
  </div>
  <button @click="saveRewards">SAVE</button>
  <button @click="getRewards">GET</button>
</template>

<script setup lang="ts">
import { storeRewards, getRewards } from "~/lib/local-storage";
import { useCombatStore } from "~/store/useCombatStore";
import { useGameStore } from "~/store/useGameStore";

const gameStore = useGameStore();
const combatStore = useCombatStore();

const saveRewards = async () => {
  if (!combatStore.player.epicRewards) return;
  await storeRewards(combatStore.player.epicRewards);
};

watch(
  () => combatStore.player.stats.currentHealth,
  (newVal) => {
    if (newVal <= 0) gameStore.loseGame();
  }
);

watch(
  () => combatStore.enemy.stats.currentHealth,
  (newVal) => {
    if (newVal <= 0) gameStore.winRound();
  }
);
</script>

<style lang="less" scoped>
.round-active {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  .ability-panel {
    grid-column: 8 / 13;
    grid-row: 10 / 13;
  }

  .player {
    grid-column: 1 / 6;
    grid-row: 6 / 13;
    border: 3px solid black;
  }

  .enemy {
    grid-column: 8 / 13;
    grid-row: 1 / 8;
    border: 3px solid black;
  }

  .stats-enemy {
    grid-column: 1 / 6;
    grid-row: 1 / 2;
  }

  .stats-player {
    grid-column: 8 / 13;
    grid-row: 9 / 10;
  }
}
</style>
