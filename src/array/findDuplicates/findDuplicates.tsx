findDuplicates([1, 2, 3, 2, 4, 1, 5]);
// [2, 1]

findDuplicates([1, 2, 3, 4]);
// []

findDuplicates([1, 1, 1, 1]);
// [1]

findDuplicates([]);
// []

export function findDuplicates(array: number[]) : number[] {
  const seen = new Set<number>();
  const dubl = new Set<number>();

  for (let number of array) {
    if (seen.has(number)) {
      dubl.add(number);
    }

    seen.add(number);

  }

  return Array.from(dubl);
}

console.log(findDuplicates([1, 2, 3, 2, 4, 1, 5]));
console.log(findDuplicates([1, 2, 3, 4]));
console.log(findDuplicates([1, 1, 1, 1]));
console.log(findDuplicates([]));
