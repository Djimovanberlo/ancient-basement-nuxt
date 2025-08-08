<template>
  <div class="combat-character-container">
    <button
      class="combat-character"
      @click="tooltipContent = characterStatsString"
    >
      {{ character.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Character } from "~/types/character";
import useSafeInject from "~/lib/useSafeInject";

interface Props {
  character: Character;
}

const props = defineProps<Props>();

const tooltipContent = useSafeInject<Ref<string>>("tooltipContent");

const characterStatsString = Object.entries(props.character.stats)
  .map(([key, value]) => `${key}: ${value}`)
  .join("\n");
</script>

<style lang="less" scoped>
.combat-character-container {
  display: flex;
  height: 100%;
  width: 100%;
  padding: 4rem 2rem;

  .combat-character {
    all: unset;
    display: flex;
    width: 100%;
    height: 75%;
    border: 1px solid black;
  }
}
</style>
