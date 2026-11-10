const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

export function maxArea(heights: number[]) {
  let leftIndex = 0;
  let rightIndex = heights.length - 1;
  let maxArea = 0;

  while (leftIndex < rightIndex) {
    let width = rightIndex - leftIndex;
    const height = Math.min(
      heights[leftIndex]!,
      heights[rightIndex]!,
    );
    let area = width * height;

    if (area > maxArea) {
      maxArea = area;
    }

    if (heights[leftIndex]! < heights[rightIndex]!) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return maxArea;
}
