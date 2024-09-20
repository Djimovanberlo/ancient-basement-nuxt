import { AbilityName, type Ability } from "~/types/ability";
import { ElementName } from "~/types/element";
import { applyHealing } from "./combat";

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
});

export const heal = createAbility({
  name: AbilityName.Heal,
  power: 0,
  damageType: "magical",
  additionalEffect: (source, target) => {
    const power = 15;
    const updatedStats = applyHealing(source.stats, power);
    source.stats = updatedStats;

    return { updatedSource: source, updatedTarget: target };
  },
});

export const drainLife = createAbility({
  name: AbilityName.DrainLife,
  power: 5,
  damageType: "magical",
  additionalEffect: (source, target) => {
    const power = 5;
    const updatedStats = applyHealing(source.stats, power);
    source.stats = updatedStats;

    return { updatedSource: source, updatedTarget: target };
  },
});

export const earthShock = createAbility({
  name: AbilityName.EarthShock,
  power: 10,
  damageType: "magical",
  element: ElementName.EARTH,
});

export const abilitiesTable: Record<AbilityName, Ability> = {
  attack: attack,
  cast: attack,
  fireball: fireball,
  heal: heal,
  drainLife: drainLife,
  earthShock: earthShock,
  // Add other abilities here as you define them
};

export const defaultAbilities = Object.values(abilitiesTable).filter(
  (ability) =>
    ability.name === AbilityName.Attack || ability.name === AbilityName.Cast
);

export const nonDefaultAbilities = Object.values(abilitiesTable).filter(
  (ability) =>
    ability.name !== AbilityName.Attack && ability.name !== AbilityName.Cast
);
