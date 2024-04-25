/* 
  长度最小的子数组
  https://leetcode.cn/problems/minimum-size-subarray-sum/description/


*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  //
  let left = 0;
  let right = 0;
  let sum = 0;
  let subLength = Number.NaN;

  // 滑动窗口。i 表示当前右边界，在这个边界下收缩左边界，找到 >= target 的最小长度
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];

    let newSum = val + sum;
    right += 1;

    while (newSum >= target) {
      newSum = newSum - nums[left];
      left++;
      const newSubLength = right - left + 1;
      if (!Number.isFinite(subLength) || newSubLength < subLength) {
        subLength = newSubLength;
      }
    }
    sum = newSum;
  }

  return Number.isFinite(subLength) ? subLength : 0;
};

minSubArrayLen(7, [2, 3, 1, 2, 4, 3]); //?
minSubArrayLen(4, [1, 4, 4]); //?
minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]); //?
minSubArrayLen(11, [1, 2, 3, 4, 5]); //?
