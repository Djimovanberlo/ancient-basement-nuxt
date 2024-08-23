import type { AbilityName } from "./ability";
import type { Stats } from "./stats";

export type CharacterType = "player" | "enemy";

export type Character = {
  name: string;
  stats: Stats;
  abilities: AbilityName[];
  // equipment: Equipment[]; Out of scope for MVP
};

export type CharacterTurn = {
  source: Character;
  target: Character;
  ability: AbilityName;
};
