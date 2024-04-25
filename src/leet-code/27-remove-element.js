/* 
  https://leetcode.cn/problems/remove-element/
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var __removeElement = function (nums, val) {
  let fast = 0;
  let slow = 0;

  while (fast <= nums.length - 1) {
    const current = nums[fast];

    if (current === val) {
      nums.splice(fast, 1);
      fast -= 1;
    }

    fast++;
  }

  return nums;
};


// 双指针法

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let fast = 0;
  let slow = 0;

  while (fast <= nums.length - 1) {
    const curr = nums[fast];

    if (curr === val) {
      fast++;
      continue;
    }

    nums[slow] = nums[fast];
    slow++;
    fast++;
  }

  // nums.length = slow;
  // return nums; //?

  return slow;
};

removeElement([1, 2, 4, 5, 7, 9, 11, 7, 15], 11); //?
