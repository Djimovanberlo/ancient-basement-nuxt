import { defineStore } from "pinia";
import {
  GameState,
  RoundState,
  TurnState,
  type ActiveGame,
} from "~/types/game";

export const useGameStore = defineStore("game", () => {
  const gameState = ref<GameState>(GameState.ACTIVE);
  const roundState = ref<RoundState>(RoundState.ACTIVE);
  const turnState = ref<TurnState>(TurnState.PLAYER_TURN);
  const activeGame = ref<ActiveGame>({
    roundNumber: 0,
    turnNumber: 0,
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
  };

  const winRound = () => {
    roundState.value = RoundState.REWARD;
  };

  const increaseTurnNumber = () => activeGame.value.turnNumber++;

  const toggleTurnState = () => {
    turnState.value =
      turnState.value === TurnState.PLAYER_TURN
        ? TurnState.ENEMY_TURN
        : TurnState.PLAYER_TURN;
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
    toggleTurnState,
  };
});
