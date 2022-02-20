/* 
  https://leetcode-cn.com/problems/daily-temperatures/

  请根据每日 气温 列表 temperatures ，请计算在每一天需要等几天才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。

  示例 1:

  输入: temperatures = [73,74,75,71,69,72,76,73]
  输出: [1,1,4,2,1,1,0,0]
  示例 2:

  输入: temperatures = [30,40,50,60]
  输出: [1,1,1,0]
  示例 3:

  输入: temperatures = [30,60,90]
  输出: [1,1,0]

*/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const len = temperatures.length;

  const stack = []; // 单调栈，存放数组下标；从下到上，坐标对应的温度值逐渐减小

  const days = Array.from({ length: len }).map((_) => 0);

  for (let i = 0; i < len; i++) {
    const tmp = temperatures[i];

    // 找出栈中比当前温度小的下标，全部更新一次，直到遇到比当前温度大的下标为止
    while (stack.length > 0) {
      const topTmp = temperatures[stack[stack.length - 1]];

      if (tmp > topTmp) {
        const prevIndex = stack.pop();
        days[prevIndex] = i - prevIndex;
        continue;
      }

      break;
    }

    // 当前温度的下标入栈，待后续查找比它大的值
    stack.push(i);
  }

  return days;
};

(function () {
  dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]); //?
})();
