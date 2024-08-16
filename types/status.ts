export enum Status {
  POISONED = "poisoned",
  BURNING = "burning",
  STUNNED = "stunned",
  CONFUSED = "confused",
}

export type StatusTurns = Record<Status, number>;
