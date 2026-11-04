mergeKSortedLists([1, 4, 7], [2, 5, 8], [3, 6, 9]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

mergeKSortedLists([1, 3, 5], [1, 2, 6], [4, 7, 8]);
// [1, 1, 2, 3, 4, 5, 6, 7, 8]

mergeKSortedLists([], [1, 2], [3, 4]);
// [1, 2, 3, 4]

mergeKSortedLists([], [], []);
// []

export function mergeKSortedLists(a: number[], b: number[], c: number[]) {
  let mergedArray = [];

  let i = 0;
  let j = 0;
  let g = 0;

  while (i < a.length || j < b.length || g < c.length) {
    const arr1 = i < a.length ? a[i] : Infinity;
    const arr2 = j < b.length ? b[j] : Infinity;
    const arr3 = g < c.length ? c[g] : Infinity;

    if (arr1! <= arr2! && arr1! <= arr3!) {
      mergedArray.push(arr1);
      i++;
    } else if (arr2! <= arr1! && arr2! <= arr3!) {
      mergedArray.push(arr2);
      j++;
    } else {
      mergedArray.push(arr3);
      g++;
    }
  }

  return mergedArray;
}

console.log(mergeKSortedLists([1, 4, 7], [2, 5, 8], [3, 6, 9]));
console.log(mergeKSortedLists([1, 3, 5], [1, 2, 6], [4, 7, 8]));
console.log(mergeKSortedLists([], [1, 2], [3, 4]));
console.log(mergeKSortedLists([], [], []));
