<template>
  <div class="round-reward">
    <template v-for="(reward, index) in rewards" :key="index">
      <RewardStat v-if="reward.type === 'stat'" :reward="reward" />
      <RewardAbility v-else :reward="reward" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from "~/store/useGameStore";
import { StatName } from "~/types/stats";
import { AbilityName } from "~/types/ability";
import type { AbilityReward, StatReward } from "~/types/reward";
import { useCombatStore } from "~/store/useCombatStore";
import { floorRandom, shuffleArray } from "~/lib/utils";
import RewardStat from "./RewardStat.vue";
import RewardAbility from "./RewardAbility.vue";

const gameStore = useGameStore();
const combatStore = useCombatStore();
const rewards = ref<(AbilityReward | StatReward)[]>([]);

onMounted(() => {
  const statRewardValue = gameStore.activeGame.roundNumber + 3; // TODO make this more dynamic
  const abilityRewards: AbilityReward[] = [];
  const statRewards: StatReward[] = [];
  const numOfRewards = 3;

  while (abilityRewards.length + statRewards.length < numOfRewards) {
    const isAbility = floorRandom(2) === 0; // 50% chance
    const isEpic = floorRandom(2) === 0; // 50% chance

    if (isAbility) {
      const excludedAbilities = [
        ...(combatStore.player.abilities || []),
        ...abilityRewards.map((ability) => ability.abilityName),
      ];

      const possibleAbilties = Object.values(AbilityName).filter(
        (ability) => !excludedAbilities.includes(ability)
      );

      if (possibleAbilties.length === 0) {
        continue;
      }

      const randomAbility =
        possibleAbilties[floorRandom(possibleAbilties.length)];

      abilityRewards.push({
        type: "ability",
        abilityName: randomAbility,
        isEpic,
      });
    } else {
      const impossibleStats = statRewards.map((stat) => stat.statName);

      const possibleStats = Object.values(StatName).filter(
        (stat) => !impossibleStats.includes(stat)
      );

      const randomStat = possibleStats[floorRandom(possibleStats.length)];
      statRewards.push({
        type: "stat",
        statName: randomStat,
        value: statRewardValue,
        isEpic,
      });
    }
  }

  rewards.value = shuffleArray([...abilityRewards, ...statRewards]);
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
