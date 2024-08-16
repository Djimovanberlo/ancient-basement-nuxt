import type { Ability } from "~/types/ability";
import { CombatType } from "~/types/stats";

const createAbility = (abiltiy: Ability): Ability => {
  return {
    name: abiltiy.name,
    power: abiltiy.power,
    combatType: CombatType.STR,
    stacks: abiltiy.stacks,
    isEpic: abiltiy.isEpic,
    additionalEffect: abiltiy.additionalEffect,
  };
};

const fireball = createAbility({
  name: "Fireball",
  power: 10,
  combatType: CombatType.INT,
  additionalEffect: (source, target) => {
    source.stats.currentHealth -= 5;
    return { updatedSource: source, updatedTarget: target };
  },
});
