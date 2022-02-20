/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const len = nums.length;

  const cache = {};
  const result = [];

  for (let i = 0; i < len; i++) {
    const j = cache[target - nums[i]];
    if (j != undefined) {
      result[0] = j;
      result[1] = i;
      break;
    } else {
      cache[nums[i]] = i;
    }
  }
  return result;
};
