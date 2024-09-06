<template>
  <div class="round-active">
    <AbilityPanel />
    <Player />
    <Enemy />
    <StatsPlayer />
    <StatsEnemy />
  </div>
</template>

<script></script>

<style lang="less" scoped>
.round-active {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  .ability-panel {
    grid-column: 1 / 13;
    grid-row: 10 / 13;
    border: 3px solid black;
  }

  .player {
    grid-column: 1 / 6;
    grid-row: 6 / 13;
    border: 3px solid black;
  }

  .enemy {
    grid-column: 8 / 13;
    grid-row: 1 / 7;
    border: 3px solid black;
  }

  .stats-enemy {
    grid-column: 1 / 7;
    grid-row: 1 / 2;
    border: 3px solid black;
  }

  .stats-player {
    grid-column: 7 / 13;
    grid-row: 9 / 10;
    border: 3px solid black;
  }
}
</style>
