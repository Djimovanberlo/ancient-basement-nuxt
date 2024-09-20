import { defineStore } from "pinia";
import { abilitiesTable } from "~/lib/ability";
import { initEnemy, initPlayer } from "~/lib/charater";
import { applyDamage, calculateDamage } from "~/lib/combat";
import type { AbilityName } from "~/types/ability";
import type { Character } from "~/types/character";

export const useCombatStore = defineStore("combat", () => {
  const player = ref<Character>(initPlayer);
  const enemy = ref<Character>(initEnemy);

  // TODO think about let and const clearly, in terms calculating damage & applying additional effects
  const _executeAbility = (
    source: Character,
    target: Character,
    abilityName: AbilityName
  ) => {
    let sourceCopy = { ...source };
    let targetCopy = { ...target };

    // Apply base damage / defense logic here
    // TEMP
    const ability = abilitiesTable[abilityName];
    const damage = calculateDamage(sourceCopy, targetCopy, ability);
    const updatedStats = applyDamage(targetCopy.stats, damage);

    targetCopy.stats = updatedStats;

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
  const executePlayerAbility = (abilityName: AbilityName) => {
    const { updatedSource, updatedTarget } = _executeAbility(
      player.value,
      enemy.value,
      abilityName
    );
    player.value = updatedSource;
    enemy.value = updatedTarget;
  };

  const executeEnemyAbility = (abilityName: AbilityName) => {
    const { updatedSource, updatedTarget } = _executeAbility(
      enemy.value,
      player.value,
      abilityName
    );
    enemy.value = updatedSource;
    player.value = updatedTarget;
  };

  // Actions to update values
  const updatePlayer = (playerValue: Character) => (player.value = playerValue);

  const updateEnemy = (enemyValue: Character) => (enemy.value = enemyValue);

  const resetCombat = () => {
    player.value = initPlayer;
    enemy.value = initEnemy;
  };

  return {
    player,
    enemy,
    executePlayerAbility,
    executeEnemyAbility,
    updatePlayer,
    updateEnemy,
    resetCombat,
  };
});
