import type { Character } from "./character";
import type { DamageType, ElementName } from "./element";

// TODO: is it worth it to only save AbilityName in storage instead of the whole object?
export interface Ability {
  name: AbilityName;
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
  DrainLife = "drainLife",
  EarthShock = "earthShock",
}
