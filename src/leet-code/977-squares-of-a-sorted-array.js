/* 
  977. 有序数组的平方
  https://leetcode.cn/problems/squares-of-a-sorted-array/description/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = [];

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const valLeft = Math.pow(nums[left], 2);
    const valRight = Math.pow(nums[right], 2);

    if (valLeft > valRight) {
      result.unshift(valLeft);

      left++;
    } else {
      result.unshift(valRight);
      right--;
    }
  }

  return result;
};

sortedSquares([-10000, -9999, -7, -5, 0, 0, 10000]); //?
sortedSquares([-4, -1, 0, 3, 10]); //?
