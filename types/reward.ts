import type { AbilityName } from "./ability";
import type { StatName } from "./stats";

export interface StatReward {
  type: "stat";
  statName: StatName;
  value: number;
}

export interface AbilityReward {
  type: "ability";
  abilityName: AbilityName;
}

export type Reward = StatReward | AbilityReward;
