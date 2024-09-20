import type { Character } from "./character";
import type { DamageType, ElementName } from "./element";

export interface Ability {
  name: string;
  power: number;
  damageType: DamageType;
  element?: ElementName;
  stacks?: number; // if undefined, the ability has infinite stacks
  isEpic?: boolean;
  additionalEffect?: (
    source: Character,
    target: Character
  ) => { updatedSource: Character; updatedTarget: Character };
}

export enum AbilityName {
  Attack = "attack", // default physical ability
  Cast = "cast", // default magical ability
  Fireball = "fireball",
  Heal = "heal",
}
