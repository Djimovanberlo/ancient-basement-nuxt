<template>
  <div class="healthbar">
    <div class="current-health">
      <div>{{ currentHealth }} / {{ maxHealth }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentHealth: number;
  maxHealth: number;
}

defineProps<Props>();
</script>

<style lang="less" scoped>
.healthbar {
  width: 100%;
  height: 40%;
  background-color: #333;
  border: 2px solid black;

  .current-health {
    height: 100%;
    font-size: 8px;
    width: calc(v-bind(currentHealth) / v-bind(maxHealth) * 100%);
    background-color: green;
  }
}
</style>
