<template>
  <div class="healthbar">
    <div class="current-health"></div>
  </div>
</template>

<script setup lang="ts">
interface HealthbarProps {
  currentHealth: number;
  maxHealth: number;
}

defineProps<HealthbarProps>();
</script>

<style lang="less" scoped>
.healthbar {
  width: 100%;
  height: 100%;
  background-color: #333;
  border: 2px solid black;

  .current-health {
    height: 100%;
    width: calc(v-bind(currentHealth) / v-bind(maxHealth) * 100%);
    background-color: green;
  }
}
</style>
