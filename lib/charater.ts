import type { Character } from "~/types/character";

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
  abilities: [],
});

export const initEnemy = createCharacter({
  name: "Enemy",
  stats: {
    currentHealth: 80,
    maxHealth: 100,
    strength: 10,
    intelligence: 5,
    defense: 5,
    resistance: 5,
    agility: 5,
  },
  abilities: [],
});
