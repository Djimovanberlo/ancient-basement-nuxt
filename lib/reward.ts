import type { Reward, StatReward } from "~/types/reward";
import { AbilityName } from "~/types/ability";
import { StatName } from "~/types/stats";

const createCurrentHealthRewardValue = (roundNumber: number): number => {
  return roundNumber + 5;
};

const createOtherStatRewardValue = (roundNumber: number): number => {
  return roundNumber + 3;
};

const getRewardValue = (roundNumber: number, stat: StatName): number => {
  return stat === "currentHealth"
    ? createCurrentHealthRewardValue(roundNumber)
    : createOtherStatRewardValue(roundNumber);
};

export const createStatReward = (roundNumber: number): StatReward => {
  const statNames = Object.values(StatName);
  const randomStat = statNames[Math.floor(Math.random() * statNames.length)];
  const value = getRewardValue(roundNumber, randomStat);

  return {
    statName: randomStat,
    value,
  };
};

export const createAbilityReward = (roundNumber: number): AbilityName => {
  const abilityNames = Object.values(AbilityName);
  const randomAbilityName =
    abilityNames[Math.floor(Math.random() * abilityNames.length)];

  return randomAbilityName;
};

export const createReward = (roundNumber: number): Reward => {
  return Math.random() < 0.5
    ? createStatReward(roundNumber)
    : createAbilityReward(roundNumber);
};
