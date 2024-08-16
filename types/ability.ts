import type { Character } from "./character";
import type { CombatType } from "./stats";

export interface Ability {
  name: string;
  power: number;
  combatType?: CombatType;
  stacks?: number; // if undefined, the ability has infinite stacks
  isEpic?: boolean;
  additionalEffect?: (
    source: Character,
    target: Character
  ) => { updatedSource: Character; updatedTarget: Character };
}
