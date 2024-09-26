import type { AbilityName } from "./ability";
import type { Reward } from "./reward";
import type { Stats } from "./stats";

export type CharacterType = "player" | "enemy";

export type Character = {
  name: string;
  stats: Stats;
  abilities: AbilityName[];
  epicRewards?: Reward[];
  // equipment: Equipment[]; Out of scope for MVP
};

export type CharacterTurn = {
  source: Character;
  target: Character;
  ability: AbilityName;
};
