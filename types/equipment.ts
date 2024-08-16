import type { Character } from "./character";
import type { PartialStats } from "./stats";

export interface Equipment {
  name: string;
  stats?: PartialStats;
  isEpic?: boolean;
  additionalEffect?: (
    source: Character,
    target: Character
  ) => { source: Character; target: Character };
}

// when to trigger additional effect?
