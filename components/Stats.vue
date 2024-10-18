<template>
  <div class="stats">
    <Healthbar
      :current-health="character.stats.currentHealth"
      :max-health="character.stats.maxHealth"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  character: Character;
}

defineProps<Props>();

import type { Character } from "~/types/character";
</script>

<style lang="less" scoped>
@import "../assets/css/panel.less";

.stats {
  padding: 30px;
  .panel-brown();
}
</style>
