<template>
  <div @click="selectAbilityReward" class="reward-ability">
    {{ reward.abilityName }}
  </div>
</template>

<script setup lang="ts">
import { orderArrayAlphabetically } from "~/lib/utils";
import { useCombatStore } from "~/store/useCombatStore";
import { useGameStore } from "~/store/useGameStore";
import { AbilityName } from "~/types/ability";
import type { AbilityReward } from "~/types/reward";

interface Props {
  reward: AbilityReward;
}

const props = defineProps<Props>();

const gameStore = useGameStore();
const combatStore = useCombatStore();

const selectAbilityReward = () => {
  if (props.reward.isEpic) {
    combatStore.player.epicRewards?.push(props.reward);
  }

  const playerAbilties = [...combatStore.player.abilities];
  const allPlayerAbilities = [...playerAbilties, props.reward.abilityName];

  const baseAbilities = allPlayerAbilities.filter(
    (ability) => ability === AbilityName.Attack || ability === AbilityName.Cast
  ) as AbilityName[];

  const otherAbilities = orderArrayAlphabetically(
    allPlayerAbilities.filter((abiltiy) => !baseAbilities.includes(abiltiy))
  ) as AbilityName[];

  const orderedAbilities = [...baseAbilities, ...otherAbilities];
  combatStore.player.abilities = orderedAbilities;

  gameStore.startNewRound();
};
</script>

<style>
.rewardAbility {
  border: 2px solid blue;
}
</style>
