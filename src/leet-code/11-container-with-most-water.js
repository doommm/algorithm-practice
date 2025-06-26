/* 
  https://leetcode.cn/problems/container-with-most-water/
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;

  let area = 0;
  let leftMax = 0;
  let rightMax = 0;

  while (left <= right) {
    const leftHeight = height[left];
    const rightHeight = height[right];

    const newArea = Math.min(leftHeight, rightHeight) * (right - left);

    area = Math.max(newArea, area);
    leftMax = Math.max(leftMax, leftHeight);
    rightMax = Math.max(rightMax, rightHeight);

    if (leftMax < rightMax) {
      left++;
    } else if (leftMax > rightMax) {
      right--;
    } else {
      left++;
      if (left < right) {
        right--;
      }
    }
  }

  return area;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); //?
maxArea([1, 1]); //?
