import type { Ability } from "./ability";
import type { Stats } from "./stats";

export type Character = {
  name: string;
  stats: Stats;
  abilities: Ability[];
};

export type CharacterTurn = {
  source: Character;
  target: Character;
  ability: Ability;
};
