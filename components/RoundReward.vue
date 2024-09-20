<template>
  <div class="round-reward">
    <div v-for="(component, index) in selectedComponents" :key="index">
      <component :is="component" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import RewardAbility from "./RewardAbility.vue";
import RewardStat from "./RewardStat.vue";

const components = [markRaw(RewardAbility), markRaw(RewardStat)];
const selectedComponents = ref([]);

function selectRandomComponent() {
  const randomIndex = Math.floor(Math.random() * components.length);
  return components[randomIndex];
}

for (let i = 0; i < 3; i++) {
  selectedComponents.value.push(selectRandomComponent());
}
</script>

<style lang="less" scoped>
.round-reward {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
</style>
