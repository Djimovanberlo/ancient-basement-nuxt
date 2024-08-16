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
  roundNumber: number;
  turnNumber: number;
}
