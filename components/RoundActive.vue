<template>
  <div class="round-active">
    <div class="sprites">
      <CombatCharacter class="player" :character="combatStore.player" />
      <CombatCharacter class="enemy" :character="combatStore.enemy" />
    </div>
    <div class="hud">
      <Stats class="stats-enemy" :character="combatStore.enemy" />
      <CombatLog />
      <Tooltip />
      <Stats class="stats-player" :character="combatStore.player" />
      <AbilityPanel />
    </div>
  </div>
  <!-- TEMP FOR DEV -->
  <div class="round-info">
    <div>R: {{ gameStore.activeGame.roundNumber }}</div>
    <div>T: {{ gameStore.activeGame.turnNumber }}</div>
    <button @click="saveRewards">SAVE</button>
    <button @click="getRewards">GET</button>
  </div>
</template>

<script setup lang="ts">
import { storeRewards, getRewards } from "~/lib/local-storage";
import { useCombatStore } from "~/store/useCombatStore";
import { useGameStore } from "~/store/useGameStore";

const gameStore = useGameStore();
const combatStore = useCombatStore();

const tooltipContent = ref<string>("");

provide("tooltipContent", tooltipContent);

const saveRewards = async () => {
  if (!combatStore.player.epicRewards) return;
  await storeRewards(combatStore.player.epicRewards);
};

watch(
  () => combatStore.player.stats.currentHealth,
  (playerHealth) => {
    console.log("playerHealth", playerHealth);
    if (playerHealth <= 0) {
      gameStore.loseGame();
      return;
    }
  }
);

watch(
  () => combatStore.enemy.stats.currentHealth,
  (enemyHealth) => {
    console.log("enemyHealth", enemyHealth);
    if (enemyHealth <= 0) gameStore.winRound();
  }
);
</script>

<style lang="less">
.round-active {
  width: 100%;
  height: 100%;
  position: relative;

  .hud,
  .sprites {
    position: absolute;
    inset: 0;
    pointer-events: none;

    * {
      pointer-events: auto;
    }
  }

  .sprites {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .player,
    .enemy {
      flex: 1;
    }

    .player {
      .combat-character {
        align-self: flex-end;
      }
    }
  }

  .hud {
    display: flex;
    flex-direction: column;

    .stats-player,
    .stats-enemy,
    .combat-log,
    .tooltip {
      width: 12rem;
    }

    .stats-player,
    .tooltip {
      align-self: flex-end;
    }

    .combat-log {
      margin-bottom: auto;
    }
  }

  // Temp for dev
  .round-info {
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
  }
}
</style>
