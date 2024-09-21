<template>
  <div class="round-reward">
    <div v-for="(reward, index) in rewards" :key="index">
      {{ reward }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from "~/store/useGameStore";
import { StatName } from "~/types/stats";
import { AbilityName } from "~/types/ability";
import type { StatReward } from "~/types/reward";
import { useCombatStore } from "~/store/useCombatStore";
import { floorRandom, shuffleArray } from "~/lib/utils";

const gameStore = useGameStore();
const combatStore = useCombatStore();

const statRewardValue = gameStore.activeGame.roundNumber + 3;
const numOfRewards = 3;

const abilityRewards = ref<AbilityName[]>([]);
const statRewards = ref<StatReward[]>([]);

const rewards = computed(() => {
  return shuffleArray([...abilityRewards.value, ...statRewards.value]);
});

onMounted(() => {
  for (let i = 0; i < numOfRewards; i++) {
    const randomIndex = floorRandom(2);

    if (randomIndex === 0) {
      const impossibleAbilties = [
        ...combatStore.player.abilities,
        ...abilityRewards.value,
      ];

      const possibleAbilties = Object.values(AbilityName).filter(
        (ability) => !impossibleAbilties.includes(ability)
      ); // TODO make this more dynamic

      const randomAbility =
        possibleAbilties[floorRandom(possibleAbilties.length)];

      abilityRewards.value.push(randomAbility);
    } else {
      const impossibleStats = statRewards.value.map((stat) => stat.statName);

      const possibleStats = Object.values(StatName).filter(
        (stat) => !impossibleStats.includes(stat)
      );

      const randomStat = possibleStats[floorRandom(possibleStats.length)];

      statRewards.value.push({
        statName: randomStat,
        value: statRewardValue,
      });
    }
  }
});
</script>

<style lang="less" scoped>
.round-reward {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
</style>
