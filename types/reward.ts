import type { AbilityName } from "./ability";
import type { StatName } from "./stats";

export interface StatReward {
  statName: StatName;
  value: number;
}

export type Rewarddd = StatReward | AbilityName;

export type RewardList = [Rewarddd, Rewarddd, Rewarddd];
