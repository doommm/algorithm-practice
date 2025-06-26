/* 
  https://leetcode.cn/problems/longest-consecutive-sequence/?envType=study-plan-v2&envId=top-100-liked

  https://www.doubao.com/thread/w6dac52acf95920c9
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let max = 0;

  /** @type {Map<number, number>} num => max length */
  const numMap = new Map();

  // 使用并查集求解
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (numMap.has(num)) continue;

    /* 
      left 是 num - 1 所在连续序列的长度，如果 num - 1 不在 numMap 中，left 为 0。
      right 是 num + 1 所在连续序列的长度，如果 num + 1 不在 numMap 中，right 为 0。
    */
    const left = numMap.get(num - 1) ?? 0;
    const right = numMap.get(num + 1) ?? 0;

    const curr = left + right + 1;
    numMap.set(num, curr);

    /* 
      1. 为什么 num - left 是左边界
      假设我们已经处理了一些数字，并且有一个连续序列 [a, a + 1, ..., num - 1]，其长度为 left。当我们处理到 num 时，它会与这个连续序列合并。
      例如，已经处理的连续序列是 [3, 4, 5]，此时 num = 6，left 就是 3（因为 3, 4, 5 这个序列长度为 3）。那么 num - left = 6 - 3 = 3，3 就是这个连续序列的左边界。

      2. 为什么 num + right 是右边界
      同样地，假设存在一个连续序列 [num + 1, num + 2, ..., b]，其长度为 right。当处理 num 时，它会与这个连续序列合并。
      例如，已经处理的连续序列是 [7, 8, 9]，此时 num = 6，right 就是 3（因为 7, 8, 9 这个序列长度为 3）。那么 num + right = 6 + 3 = 9，9 就是这个连续序列的右边界。

      3. 为什么要更新左边界和右边界的连续序列长度
      在合并连续序列后，新的连续序列长度为 curr。为了保证后续处理其他数字时能够正确获取整个连续序列的长度，我们需要更新左边界和右边界对应的连续序列长度。
      继续上面的例子，当 num = 6 时，它将 [3, 4, 5] 和 [7, 8, 9] 合并成一个新的连续序列 [3, 4, 5, 6, 7, 8, 9]，长度 curr = 3 + 3 + 1 = 7。我们需要将左边界 3 和右边界 9 对应的连续序列长度都更新为 7，这样当后续处理与这个连续序列相邻的数字时，就能正确计算出新的连续序列长度。
    */
    numMap.set(num - left, curr);
    numMap.set(num + right, curr);

    max = Math.max(max, curr);
  }

  return max;
};

longestConsecutive([100, 4, 200, 1, 3, 2]); //?
// longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]); //?
// longestConsecutive([1, 0, 1, 2]); //?
