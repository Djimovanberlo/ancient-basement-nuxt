<template>
  <div class="round-reward">
    <div v-for="(item, index) in selectedComponents" :key="index">
      <component :is="item.component" v-bind="item.props" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import RewardAbility from "./RewardAbility.vue";
import RewardStat from "./RewardStat.vue";
import { useCombatStore } from "~/store/useCombatStore";
import { nonDefaultAbilities } from "~/lib/ability";
import { Rewarddd } from "~/types/reward";

const rewards = ref < Rewarddd > [];

// TODO clean up and make work
const combatStore = useCombatStore();

const components = [markRaw(RewardAbility), markRaw(RewardStat)];
const selectedComponents = ref([]);

const filteredAbilities = nonDefaultAbilities.filter(
  (ability) => !combatStore.player.abilities.includes(ability)
);

const selectRandomAbility = () => {
  const availableAbilities = filteredAbilities.filter(
    (ability) => !selectedAbilities.has(ability)
  );

  if (availableAbilities.length === 0) return null; // Return null if no abilities are left

  const randomIndex = Math.floor(Math.random() * availableAbilities.length);
  return availableAbilities[randomIndex];
};

const selectRandomComponent = () => {
  const randomIndex = Math.floor(Math.random() * components.length);
  return components[randomIndex];
};

for (let i = 0; i < 3; i++) {
  const selectedRandomComponent = selectRandomComponent();

  // Define props based on the selected component
  const props =
    selectedRandomComponent === RewardAbility
      ? { ability: selectRandomAbility() }
      : {};

  selectedComponents.value.push({ component: selectedRandomComponent, props });
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
