import type { Character } from "~/types/character";
import { AbilityName } from "~/types/ability";
import { Status, type StatusTurns } from "~/types/status";

const initStatus: StatusTurns = {
  [Status.POISONED]: 0,
  [Status.BURNING]: 0,
  [Status.STUNNED]: 0,
  [Status.CONFUSED]: 0,
};

const createInitStatus = (status: Partial<StatusTurns>): StatusTurns => {
  return {
    ...initStatus,
    ...status,
  };
};

const createCharacter = (character: Character): Character => {
  return {
    name: character.name,
    stats: character.stats,
    status: character.status || initStatus,
    abilities: character.abilities,
    epicRewards: character.epicRewards,
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
  status: createInitStatus({
    [Status.POISONED]: 1,
    [Status.CONFUSED]: 3,
  }),
  abilities: [
    AbilityName.Fireball,
    AbilityName.Heal,
    AbilityName.Attack,
    AbilityName.Cast,
    AbilityName.Cast,
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
});
