export enum CombatType {
  STR = "strength",
  INT = "intelligence",
  AGI = "agility",
}

export interface Stats {
  currentHealth: number;
  maxHealth: number;
  [CombatType.STR]: number;
  [CombatType.INT]: number;
  [CombatType.AGI]: number;
}
