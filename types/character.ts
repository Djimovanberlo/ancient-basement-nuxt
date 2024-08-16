import type { Ability } from "./ability";
import type { Equipment } from "./equipment";
import type { Stats } from "./stats";

export type Character = {
  name: string;
  stats: Stats;
  abilities: Ability[];
  equipment: Equipment[];
};

export type CharacterTurn = {
  source: Character;
  target: Character;
  ability: Ability;
};
