import type { AbilityName } from "./ability";

// STR, INT, AGI, maxHealth
// Picking maxHeath reward also heals the character's currentHealth
export type StatReward =
  | { maxHealth: number }
  | { strength: number }
  | { intelligence: number }
  | { defense: number }
  | { resistance: number }
  | { agility: number };

export type Reward = StatReward | AbilityName;

export type RewardList = [Reward, Reward, Reward];
