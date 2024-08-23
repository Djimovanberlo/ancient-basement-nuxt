// /lib/combat/combatUtils.ts
// all chatGPT rough examples
import type { Character } from "~/types/character";
import type { Ability } from "~/types/ability";

export const isPhysicalDamage = (ability: Ability): boolean => {
  return ability.damageType === "physical";
};

export const isMagicalDamage = (ability: Ability): boolean => {
  return ability.damageType === "magical";
};

export const calculateDamage = (
  source: Character,
  target: Character,
  ability: Ability
): number => {
  // Example logic for calculating damage
  let baseDamage = ability.power;

  if (isPhysicalDamage(ability)) {
    baseDamage += source.stats.strength;
  } else if (isMagicalDamage(ability)) {
    baseDamage += source.stats.intelligence;
  }

  // Subtract target's defense or any other modifiers here
  // This can be expanded with more complex logic

  return baseDamage;
};

// Add more utility functions as needed
