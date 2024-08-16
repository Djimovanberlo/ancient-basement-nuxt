export enum Status {
  POISONED = "poisoned", // low dmg each turn
  BURNING = "burning", // high dmg for 3 turns
  STUNNED = "stunned",
  CONFUSED = "confused",
}

export type StatusTurns = Record<Status, number>;
