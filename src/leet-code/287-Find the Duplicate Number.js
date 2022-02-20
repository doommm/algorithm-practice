/*
  给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n）
  可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。
*/

/**
 * 寻找重复数
 * @param {number[]} nums nums
 * @return {number} duplicate num
 */
function findDuplicate(nums) {
  const dict = {};
  const { length } = nums;
  for (let i = 0; i < length; i += 1) {
    const num = nums[i];
    if (`${num}` in dict) {
      return num;
    }
    dict[num] = 1;
  }
  throw new Error('no duplicate num');
}
