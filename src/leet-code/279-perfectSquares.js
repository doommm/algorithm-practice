/* 
  279. 完全平方数
  https://leetcode-cn.com/problems/perfect-squares


  给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

  给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。

  完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

  tags: 广度优先搜索，数学，动态规划
*/

/**
 * bfs 解法
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const queue = [0];
  const visited = new Set([0]); // 记录访问过的节点，剪枝

  let count = 0;

  while (queue.length > 0) {
    count++;

    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const curr = queue.shift();

      for (let j = 1; j <= n; j++) {
        const next = j ** 2 + curr;

        if (next === n) {
          return count;
        }

        if (next > n) {
          break;
        }

        if (!visited.has(next)) {
          visited.add(next);
          queue.push(next);
        }
      }
    }
  }

  return -1;
};

/**
 * DP 解法
 * @param {number} n
 * @return {number}
 */
var numSquares2 = function (n) {};

// 12 -> 3, 4+4+4
// 13 -> 2, 4+9
console.log(numSquares(12)); //?
console.log(numSquares(13)); //?
