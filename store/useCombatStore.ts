import { defineStore } from "pinia";
import { abilitiesTable } from "~/lib/ability";
import { initEnemy, initPlayer } from "~/lib/character";
import { applyDamage, calculateDamage } from "~/lib/combat";
import { DEFAULT_TIMEOUT } from "~/lib/constants";
import { AbilityName } from "~/types/ability";
import type { Character, CharacterType } from "~/types/character";

export const useCombatStore = defineStore("combat", () => {
  const playerCanAct = ref<boolean>(true);
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

  const _executePlayerAbility = (abilityName: AbilityName) => {
    const { updatedSource, updatedTarget } = _executeAbility(
      player.value,
      enemy.value,
      abilityName
    );
    player.value = updatedSource;
    enemy.value = updatedTarget;
  };

  const _executeEnemyAbility = (abilityName: AbilityName) => {
    const { updatedSource, updatedTarget } = _executeAbility(
      enemy.value,
      player.value,
      abilityName
    );
    enemy.value = updatedSource;
    player.value = updatedTarget;
  };

  const _determineFirstTurn = (): CharacterType => {
    const playerAgility = player.value.stats.agility;
    const enemyAgility = enemy.value.stats.agility;

    if (playerAgility > enemyAgility) {
      // TODO some semi random logic
      return "player";
    }

    return "enemy";
  };

  const executeTurn = (playerAbility: AbilityName) => {
    const firstTurn = _determineFirstTurn();

    playerCanAct.value = false;

    if (firstTurn === "player") {
      _executePlayerAbility(playerAbility);
      setTimeout(() => {
        _executeEnemyAbility(AbilityName.Attack);
        playerCanAct.value = true;
      }, DEFAULT_TIMEOUT);

      return;
    }

    _executeEnemyAbility(AbilityName.Attack);
    setTimeout(() => {
      _executePlayerAbility(playerAbility);
      playerCanAct.value = true;
    }, DEFAULT_TIMEOUT);
  };

  const updateEnemy = (enemyValue: Character) => (enemy.value = enemyValue);

  return {
    player,
    enemy,
    updateEnemy,
    executeTurn,
    playerCanAct,
  };
});
