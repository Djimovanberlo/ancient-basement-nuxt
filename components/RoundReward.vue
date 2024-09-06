<template>
  <div class="round-reward">YEY</div>
</template>

<script setup>
import { useGameStore } from "~/store/useGameStore";
import { RoundState } from "~/types/game";

const gameStore = useGameStore();
</script>

<style lang="less" scoped>
.round-reward {
  width: 100%;
  height: 100%;
}
</style>
