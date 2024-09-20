import type { AbilityName } from "./ability";
import type { StatName } from "./stats";

export interface StatReward {
  statName: StatName;
  value: number;
}

export type Reward = StatReward | AbilityName;

export type RewardList = [Reward, Reward, Reward];
