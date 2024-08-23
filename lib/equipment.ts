import type { Equipment } from "~/types/equipment";

// Out of scope for MVP

const createEquipment = (equipment: Equipment): Equipment => {
  return {
    name: equipment.name,
    stats: equipment.stats,
    isEpic: equipment.isEpic,
    additionalEffect: equipment.additionalEffect,
  };
};

export const sword = createEquipment({
  name: "Sword",
  stats: {
    strength: 5,
  },
});
