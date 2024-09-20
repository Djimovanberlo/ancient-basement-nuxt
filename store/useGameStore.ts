import { defineStore } from "pinia";
import {
  GameState,
  RoundState,
  TurnState,
  type ActiveGame,
} from "~/types/game";
import { useCombatStore } from "./useCombatStore";
import { additionalEnemy } from "~/lib/charater";

export const useGameStore = defineStore("game", () => {
  const combatStore = useCombatStore();

  const gameState = ref<GameState>(GameState.ACTIVE);
  const roundState = ref<RoundState>(RoundState.ACTIVE);
  const turnState = ref<TurnState>(TurnState.PLAYER_TURN);
  const activeGame = ref<ActiveGame>({
    roundNumber: 1,
    turnNumber: 1,
  });

  const _updateGameState = (newState: GameState) =>
    (gameState.value = newState);

  const loseGame = () => _updateGameState(GameState.DEFEAT);

  const winGame = () => _updateGameState(GameState.VICTORY);

  const activateGame = () => _updateGameState(GameState.ACTIVE);

  const resetGame = () => {
    _updateGameState(GameState.MENU);
    roundState.value = RoundState.ACTIVE;
    activeGame.value = {
      roundNumber: 1,
      turnNumber: 1,
    };
  };

  const startNewRound = () => {
    roundState.value = RoundState.ACTIVE;
    activeGame.value.turnNumber = 1;
    activeGame.value.roundNumber++;
    combatStore.updateEnemy(additionalEnemy);
  };

  const winRound = () => {
    roundState.value = RoundState.REWARD;
  };

  const increaseTurnNumber = () => activeGame.value.turnNumber++;

  const finishPlayerTurn = () => {
    turnState.value = TurnState.ENEMY_TURN;
  };

  const finishEnemyTurn = () => {
    turnState.value = TurnState.PLAYER_TURN;
  };

  return {
    gameState,
    roundState,
    turnState,
    activeGame,
    loseGame,
    winGame,
    activateGame,
    resetGame,
    startNewRound,
    increaseTurnNumber,
    winRound,
    finishPlayerTurn,
    finishEnemyTurn,
  };
});
