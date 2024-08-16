import { defineStore } from "pinia";
import {
  GameState,
  RoundState,
  TurnState,
  type ActiveGame,
} from "~/types/game";

export const useGameStore = defineStore("game", () => {
  const gameState = ref<GameState>(GameState.MENU);
  const roundState = ref<RoundState>(RoundState.ACTIVE);
  const turnState = ref<TurnState>(TurnState.PLAYER_TURN);
  const activeGame = ref<ActiveGame>({
    roundNumber: 0,
    turnNumber: 0,
  });

  const updateGameState = (newState: GameState) => {
    gameState.value = newState;
  };

  const increaseRoundNumber = () => {
    activeGame.value.roundNumber++;
  };

  const increaseTurnNumber = () => {
    activeGame.value.turnNumber++;
  };

  const toggleRoundState = () => {
    roundState.value =
      roundState.value === RoundState.REWARD
        ? RoundState.ACTIVE
        : RoundState.REWARD;
  };

  const toggleTurnState = () => {
    turnState.value =
      turnState.value === TurnState.PLAYER_TURN
        ? TurnState.ENEMY_TURN
        : TurnState.PLAYER_TURN;
  };

  const resetGame = () => {
    gameState.value = GameState.MENU;
    activeGame.value = {
      roundNumber: 0,
      turnNumber: 0,
    };
  };

  return {
    gameState,
    roundState,
    turnState,
    activeGame,
    updateGameState,
    increaseRoundNumber,
    increaseTurnNumber,
    toggleRoundState,
    toggleTurnState,
    resetGame,
  };
});
