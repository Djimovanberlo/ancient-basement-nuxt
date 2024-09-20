import { AbilityName, type Ability } from "~/types/ability";
import { ElementName } from "~/types/element";

const createAbility = (abiltiy: Ability): Ability => {
  return {
    name: abiltiy.name,
    power: abiltiy.power,
    damageType: abiltiy.damageType,
    element: abiltiy.element,
    stacks: abiltiy.stacks,
    isEpic: abiltiy.isEpic,
    additionalEffect: abiltiy.additionalEffect,
  };
};

export const attack = createAbility({
  name: AbilityName.Attack,
  damageType: "physical",
  power: 5,
});

export const fireball = createAbility({
  name: AbilityName.Fireball,
  power: 10,
  damageType: "magical",
  element: ElementName.FIRE,
  additionalEffect: (source, target) => {
    source.stats.currentHealth -= 5;
    return { updatedSource: source, updatedTarget: target };
  },
});

export const heal = createAbility({
  name: AbilityName.Heal,
  power: 10,
  damageType: "magical",
  additionalEffect: (source, target) => {
    source.stats.currentHealth += 5;
    return { updatedSource: source, updatedTarget: target };
  },
});

export const abilitiesTable: Record<AbilityName, Ability> = {
  attack: attack,
  cast: attack,
  fireball: fireball,
  heal: heal,
  // Add other abilities here as you define them
};
