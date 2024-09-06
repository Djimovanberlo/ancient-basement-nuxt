import type { Character } from "./character";
import type { Stats } from "./stats";

// Out of scope for MVP
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
