<template>
  <div class="stats">
    <span>name</span>
    <Healthbar
      :current-health="character.stats.currentHealth"
      :max-health="character.stats.maxHealth"
    />
    <Status v-if="character.status" :status-turns="character.status" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  character: Character;
}

defineProps<Props>();

import type { Character } from "~/types/character";
import Status from "./Status.vue";
</script>

<style lang="less" scoped>
@import "../assets/css/panel.less";

.stats {
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  .panel-brown();
}
</style>
