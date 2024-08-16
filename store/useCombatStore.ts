import { defineStore } from "pinia";
import type { Ability } from "~/types/ability";
import type { Character } from "~/types/character";

const initCharacter: Character = {
  name: "Player",
  stats: {
    currentHealth: 100,
    maxHealth: 100,
    strength: 10,
    agility: 5,
    intelligence: 5,
  },
  abilities: [],
  equipment: [],
};

export const useCombatStore = defineStore("combat", () => {
  const player = ref<Character>(initCharacter);
  const enemy = ref<Character>(initCharacter);

  const _executeAbility = (
    source: Character,
    target: Character,
    ability: Ability
  ) => {
    let sourceCopy = { ...source };
    let targetCopy = { ...target };

    // Apply base damage / defense logic here

    if (ability.additionalEffect) {
      const { updatedSource, updatedTarget } = ability.additionalEffect(
        sourceCopy,
        targetCopy
      );
      updatedSource;
      updatedTarget;
    }

    return { updatedSource: sourceCopy, updatedTarget: targetCopy };
  };

  // Actions to execute abilities
  const executePlayerAbility = (ability: Ability) => {
    const { updatedSource, updatedTarget } = _executeAbility(
      player.value,
      enemy.value,
      ability
    );
    player.value = updatedSource;
    enemy.value = updatedTarget;
  };

  const executeEnemyAbility = (ability: Ability) => {
    const { updatedSource, updatedTarget } = _executeAbility(
      enemy.value,
      player.value,
      ability
    );
    enemy.value = updatedSource;
    player.value = updatedTarget;
  };

  const updatePlayer = (playerValue: Character) => {
    player.value = playerValue;
  };

  const updateEnemy = (enemyValue: Character) => {
    enemy.value = enemyValue;
  };

  return {
    player,
    enemy,
    executePlayerAbility,
    executeEnemyAbility,
    updatePlayer,
    updateEnemy,
  };
});
