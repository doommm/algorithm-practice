/* 
  https://leetcode.cn/problems/move-zeroes/description/?envType=study-plan-v2&envId=top-100-liked


  给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时**保持非零元素的相对顺序**。
  请注意 ，必须在不复制数组的情况下原地对数组进行操作。=
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let nonZeroIndex = 0;
  let zeroIndex = 0;
  const lastIndex = nums.length - 1;

  if (nums.length < 1) return;

  while (zeroIndex < lastIndex && nonZeroIndex < lastIndex) {
    while (nums[zeroIndex] !== 0 && zeroIndex < lastIndex) {
      zeroIndex++;
    }

    // 当前位置为 0 或者已经满足顺序时，寻找下一个非 0 点
    while ((nums[nonZeroIndex] === 0 || nonZeroIndex < zeroIndex) && nonZeroIndex < lastIndex) {
      nonZeroIndex++;
    }

    if (zeroIndex > nonZeroIndex) {
      continue;
    }

    const temp = nums[nonZeroIndex];
    nums[nonZeroIndex] = nums[zeroIndex];
    nums[zeroIndex] = temp;
  }

  return nums;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes2 = function (nums) {
  let slowIndex = 0; // zero
  let fastIndex = 0; // non zero
  const lastIndex = nums.length - 1;

  if (nums.length < 1) return;

  /* 
    使用双指针，左指针指向当前已经处理好的序列的尾部，右指针指向待处理序列的头部。
    右指针不断向右移动，每次右指针指向非零数，则将左右指针对应的数交换，同时左指针右移。

    注意到以下性质：
    左指针左边均为非零数；
    右指针左边直到左指针处均为零。

    因此每次交换，都是将左指针的零与右指针的非零数交换，且非零数的相对顺序并未改变。

    如果数组没有0，那么快慢指针始终指向同一个位置，每个位置自己和自己交换；
    如果数组有0，快指针先走一步，此时慢指针对应的就是0，所以要交换。
  */

  while (fastIndex <= lastIndex) {
    if (nums[fastIndex] !== 0) {
      const temp = nums[slowIndex];
      nums[slowIndex] = nums[fastIndex];
      nums[fastIndex] = temp;

      slowIndex++;
    }

    fastIndex++;
  }

  return nums;
};

(function run() {
  const fn = moveZeroes2;

  fn([0, 1, 0, 3, 12]); //?
  fn([1, 0, 0]); //?
  fn([1, 0]); //?
  fn([1, 0, 1]); //?
  fn([2, 1]); //?
})();
