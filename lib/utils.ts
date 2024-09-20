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
