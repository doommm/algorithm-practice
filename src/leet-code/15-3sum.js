/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  //
  nums.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i]) continue;
    const a = nums[i];

    let left = i + 1;
    let right = nums.length - 1;
  }

  return result;
};

threeSum([-1, 0, 1, 2, -1, -4]); //?
threeSum([0, 1, 1]); //?
threeSum([0, 0, 0]); //?
