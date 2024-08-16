import type { Ability } from "~/types/ability";
import { CombatType } from "~/types/stats";

const createFireBall = (partialAbility: Partial<Ability>): Ability => {
  return {
    name: "Fire Ball",
    power: 10,
    combatType: CombatType.INT,
    additionalEffect: (source, target) => {
      let updatedTarget = { ...target };
      updatedTarget.stats.currentHealth -= source.stats.intelligence * 2;
      return { updatedSource: source, updatedTarget };
    },
  };
};
