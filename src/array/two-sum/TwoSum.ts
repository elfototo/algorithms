// ====== Two Sum (hash map) ======

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// nums = [2, 7, 11, 15]

// target = 9

// → [0, 1]

export default function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (const [i, value] of nums.entries()) {
    let num = target - value;

    const secondIndex = map.get(num);

    if (secondIndex !== undefined) {
      return [i, secondIndex];
    }
    map.set(value, i);
  }

  return [];
}