// all chatGPT rough examples
import type { Character } from "~/types/character";
import type { Ability } from "~/types/ability";
import { StatName, type Stats } from "~/types/stats";
import { preventBelowZero } from "./utils";

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

  if (baseDamage === 0) return baseDamage;

  if (isPhysicalDamage(ability)) {
    baseDamage += source.stats.strength;
  } else if (isMagicalDamage(ability)) {
    baseDamage += source.stats.intelligence;
  }

  // Subtract target's defense or any other modifiers here
  // This can be expanded with more complex logic

  return baseDamage;
};

const getUpdatedHealth = (
  maxHealth: number,
  currentHealth: number,
  value: number
) => {
  const updatedHealth = currentHealth + value;

  if (updatedHealth <= 0) {
    return 0;
  } else if (updatedHealth >= maxHealth) {
    return maxHealth;
  }

  return updatedHealth;
};

export const getUpdatedCharacterStats = (
  stats: Stats,
  statsToUpdate: Partial<Stats>
) => {
  const statsCopy = { ...stats };

  for (const [key, value] of Object.entries(statsToUpdate)) {
    const statKey = key as StatName;

    if (statKey === StatName.CURRENT_HEALTH) {
      const maxHealth = statsCopy[StatName.MAX_HEALTH];
      const currentHealth = statsCopy[StatName.CURRENT_HEALTH];
      const updatedHealth = getUpdatedHealth(maxHealth, currentHealth, value);
      statsCopy[StatName.CURRENT_HEALTH] = updatedHealth;
    } else {
      const updatedStat = preventBelowZero(statsCopy[statKey], value);
      statsCopy[statKey] = updatedStat;
    }
  }

  return statsCopy;
};

export const applyDamage = (stats: Stats, damage: number): Stats => {
  if (damage === 0) return stats;

  return getUpdatedCharacterStats(stats, { currentHealth: -damage });
};

export const applyHealing = (stats: Stats, healing: number): Stats => {
  if (healing === 0) return stats;

  return getUpdatedCharacterStats(stats, { currentHealth: +healing });
};
