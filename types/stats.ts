export enum StatName {
  CURRENT_HEALTH = "currentHealth",
  MAX_HEALTH = "maxHealth",
  STRENGTH = "strength", // physical damage
  INTELLIGENCE = "intelligence", // magical damage
  DEFENSE = "defense", // physical defense, chance to ignore physical damage
  RESISTANCE = "resistance", // magical defense, chance to ignore magical damage
  AGILITY = "agility", // speed (turn order), crit chance (physical & magical)
}

export interface Stats {
  [StatName.CURRENT_HEALTH]: number;
  [StatName.MAX_HEALTH]: number;
  [StatName.STRENGTH]: number;
  [StatName.INTELLIGENCE]: number;
  [StatName.DEFENSE]: number;
  [StatName.RESISTANCE]: number;
  [StatName.AGILITY]: number;
}
