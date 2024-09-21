export enum GameState {
  ACTIVE = "active",
  MENU = "menu",
  DEFEAT = "defeat",
  VICTORY = "victory",
}

export enum RoundState {
  ACTIVE = "active",
  REWARD = "reward",
}

export enum TurnState {
  PLAYER_TURN = "player",
  ENEMY_TURN = "enemy",
}

export interface ActiveGame {
  roundNumber: number; // represents the current round, meaning the number of times the player has defeated an enemy
  turnNumber: number; // represents the current turn, meaning the amount of turns within a round
}
