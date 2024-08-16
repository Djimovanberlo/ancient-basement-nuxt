export enum Status {
  POISONED = "poisoned",
  STUNNED = "stunned",
  CONFUSED = "confused",
}

export type StatusTurns = Record<Status, number>;
