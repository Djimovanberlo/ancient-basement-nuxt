import type { Ability } from "~/types/ability";

const orderArrayAlphabetically = (arr: string[]) => {
  return arr.sort((a, b) => {
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();
    if (lowerA < lowerB) return -1;
    if (lowerA > lowerB) return 1;
    return 0;
  });
};

const orderAbilitiesAlphabetically = (abilities: Ability[]): Ability[] => {
  const sortedNames = orderArrayAlphabetically(abilities.map((a) => a.name));

  return abilities.sort((a, b) => {
    return sortedNames.indexOf(a.name) - sortedNames.indexOf(b.name);
  });
};

export const preventBelowZero = (
  currentValue: number,
  delta: number
): number => {
  const result = currentValue + delta;
  return result < 0 ? 0 : result;
};

export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const floorRandom = (max: number): number => {
  return Math.floor(Math.random() * max);
};
