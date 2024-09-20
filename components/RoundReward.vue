<template>
  <div class="round-reward">
    <!-- <div v-for="(item, index) in selectedComponents" :key="index">
      <component :is="item.component" v-bind="item.props" />
    </div> -->
  </div>
</template>

<script setup>
import { nonDefaultAbilities } from "~/lib/ability";
import { useGameStore } from "~/store/useGameStore";
import { StatName } from "~/types/stats";
import { AbilityName } from "~/types/ability";

const gameStore = useGameStore();

const statRewardValue = gameStore.activeGame.roundNumber + 3; // TODO make this more dynamic

const generateUniqueRandomArray = (length) => {
  const allElements = [
    ...Object.values(StatName).map((stat) => ({
      stat,
      value: statRewardValue,
    })),
    ...Object.values(AbilityName),
  ];
  const uniqueArray = [];

  for (let i = 0; i < length; i++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * allElements.length);
    } while (uniqueArray.includes(allElements[randomIndex]));

    uniqueArray.push(allElements[randomIndex]);
  }

  return uniqueArray;
};

// Generate the array of 3 unique random elements
const randomRewards = generateUniqueRandomArray(3);

console.log("R", randomRewards); // Debug output
</script>

<style lang="less" scoped>
.round-reward {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
</style>
