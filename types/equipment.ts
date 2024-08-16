import type { Character } from "./character";
import type { Stats } from "./stats";

export interface Equipment {
  name: string;
  stats?: Partial<Stats>;
  isEpic?: boolean;
  additionalEffect?: (
    source: Character,
    target: Character
  ) => { source: Character; target: Character };
}

// when to trigger additional effect?
