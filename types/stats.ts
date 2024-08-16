export enum CombatType {
  STR = "strength",
  INT = "intelligence",
  AGI = "agility",
}

export type Stats = {
  currentHealth: number;
  maxHealth: number;
  [CombatType.STR]: number;
  [CombatType.INT]: number;
  [CombatType.AGI]: number;
};

export type PartialStats = Partial<Stats>;
