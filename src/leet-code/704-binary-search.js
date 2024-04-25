/* 
  https://leetcode.cn/problems/binary-search/
  二分查找
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let pivot = start + Math.floor((end - start) / 2);
    const val = nums[pivot];

    if (val === target) {
      return pivot;
    } else if (val < target) {
      start = pivot + 1;
    } else if (val > target) {
      end = pivot - 1;
    }
  }

  return -1;
};

search([2, 4, 8, 11, 17, 20, 21], 17); //?
search([2, 4, 8, 11, 17, 20, 21], 2); //?
search([2, 4, 8, 11, 17, 20], 20); //?
