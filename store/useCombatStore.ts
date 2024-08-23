import { defineStore } from "pinia";
import { initEnemy, initPlayer } from "~/lib/charater";
import { calculateDamage } from "~/lib/combat";
import type { Ability } from "~/types/ability";
import type { Character } from "~/types/character";

export const useCombatStore = defineStore("combat", () => {
  const player = ref<Character>(initPlayer);
  const enemy = ref<Character>(initEnemy);

  // TODO think about let and const clearly, in terms calculating damage & applying additional effects
  const _executeAbility = (
    source: Character,
    target: Character,
    ability: Ability
  ) => {
    let sourceCopy = { ...source };
    let targetCopy = { ...target };

    // Apply base damage / defense logic here
    // TEMP
    const damage = calculateDamage(sourceCopy, targetCopy, ability);

    targetCopy.stats.currentHealth -= damage;

    if (!ability.additionalEffect) {
      return { updatedSource: sourceCopy, updatedTarget: targetCopy };
    }

    // If present, apply additional effect after core damage logic
    const { updatedSource, updatedTarget } = ability.additionalEffect(
      sourceCopy,
      targetCopy
    );

    return { updatedSource, updatedTarget };
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

  // Actions to update values
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
