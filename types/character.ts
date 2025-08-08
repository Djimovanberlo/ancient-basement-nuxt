import type { AbilityName } from "./ability";
import type { Reward } from "./reward";
import type { Stats } from "./stats";
import type { StatusTurns } from "./status";

export type CharacterType = "player" | "enemy";

export type Character = {
  name: string;
  stats: Stats;
  status?: StatusTurns;
  abilities?: AbilityName[];
  epicRewards?: Reward[];
  // equipment: Equipment[]; Out of scope for MVP
};

export type CharacterTurn = {
  source: Character;
  target: Character;
  ability: AbilityName;
};
