import type { Character } from "~/types/character";
import { AbilityName } from "~/types/ability";

const createCharacter = (character: Character): Character => {
  return {
    name: character.name,
    stats: character.stats,
    abilities: character.abilities,
  };
};

export const initPlayer = createCharacter({
  name: "Player",
  stats: {
    currentHealth: 80,
    maxHealth: 100,
    strength: 10,
    intelligence: 5,
    defense: 5,
    resistance: 5,
    agility: 5,
  },
  abilities: [
    AbilityName.Fireball,
    AbilityName.Heal,
    AbilityName.Attack,
    AbilityName.Cast,
  ],
});

export const initEnemy = createCharacter({
  name: "Enemy",
  stats: {
    currentHealth: 80,
    maxHealth: 100,
    strength: 2,
    intelligence: 5,
    defense: 5,
    resistance: 5,
    agility: 2,
  },
  abilities: [],
});

export const additionalEnemy = createCharacter({
  name: "Additional Enemy",
  stats: {
    currentHealth: 150,
    maxHealth: 200,
    strength: 10,
    intelligence: 5,
    defense: 5,
    resistance: 5,
    agility: 7,
  },
  abilities: [],
});
