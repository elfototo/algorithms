// const nums = [-1, 0, 3, 5, 9, 12]

// const target = 9

export function binarySearch(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let media = Math.floor((right + left) / 2);
    let valMedia = nums[media];

    if (valMedia === target) return media;

    if (valMedia === undefined) break;

    if (target > valMedia) {
      left = media + 1;
    } else if (target < valMedia) {
      right = media - 1;
    }
  }

  return -1;
}

console.log("binarySearch", binarySearch([-1, 0, 3, 5, 9, 12], 9));
