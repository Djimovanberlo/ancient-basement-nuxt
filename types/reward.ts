import type { Ability } from "./ability";
import type { Stats } from "./stats";

// STR, INT, AGI, maxHealth
// Picking maxHeath reward also heals the character's currentHealth
type StatReward = Omit<Stats, "currentHealth">;

export type Reward = StatReward | Ability;

export type RewardList = [Reward, Reward, Reward];
