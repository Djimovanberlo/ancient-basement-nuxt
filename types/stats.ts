export enum StatName {
  CURRENT_HEALTH = "currentHealth",
  TOTAL_HEALTH = "totalHealth",
  MAX_HEALTH = "maxHealth",
  STRENGTH = "strength",
  INTELLIGENCE = "intelligence",
  DEFENSE = "defense",
  RESISTANCE = "resistance",
  AGILITY = "agility",
}

export interface Stats {
  [StatName.CURRENT_HEALTH]: number;
  [StatName.TOTAL_HEALTH]: number;
  [StatName.MAX_HEALTH]: number;
  [StatName.STRENGTH]: number;
  [StatName.INTELLIGENCE]: number;
  [StatName.DEFENSE]: number;
  [StatName.RESISTANCE]: number;
  [StatName.AGILITY]: number;
}
