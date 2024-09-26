import type { AbilityName } from "./ability";
import type { StatName } from "./stats";

export interface StatReward {
  type: "stat";
  statName: StatName;
  value: number;
  isEpic: boolean;
}

export interface AbilityReward {
  type: "ability";
  abilityName: AbilityName;
  isEpic?: boolean;
}

export type Reward = StatReward | AbilityReward;
