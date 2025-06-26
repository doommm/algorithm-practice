/* 
  42. 接雨水  
  https://leetcode.cn/problems/trapping-rain-water/
  https://juejin.cn/post/7323271675331084315#heading-13

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let result = 0;

  let leftIndex = 0;
  let rightIndex = height.length - 1;

  let leftMax = height[leftIndex];
  let rightMax = height[rightIndex];

  while (leftIndex <= rightIndex) {
    const currLeft = height[leftIndex];
    const currRight = height[rightIndex];
    leftMax = Math.max(currLeft, leftMax);
    rightMax = Math.max(currRight, rightMax);

    if (leftMax <= rightMax) {
      //
      result += leftMax - currLeft;
      leftIndex++;
    } else if (leftMax > rightMax) {
      //
      result += rightMax - currRight;
      rightIndex--;
    } else {
      // leftMax equal to rightMax
      result += leftMax - currLeft;
      leftIndex++;
      if (leftIndex < rightIndex) {
        result += rightMax - currRight;
        rightIndex--;
      }
    }
  }

  return result;
};

/**
 * 单调栈
 * @param {number[]} height
 * @return {number}
 */
var trapStack = function (height) {
  let result = 0;

  /** indices @type {number[]} */
  let stack = [];

  for (let rightIndex = 0; rightIndex < height.length; rightIndex++) {
    const rightHeight = height[rightIndex];

    while (stack.length > 0 && height[stack[stack.length - 1]] < rightHeight) {
      const middleIndex = stack.pop();

      if (stack.length < 1) {
        break;
      }

      const leftIndex = stack[stack.length - 1];
      const width = rightIndex - leftIndex - 1; //?
      const h = Math.min(height[rightIndex], height[leftIndex]) - height[middleIndex]; //?

      result += h * width;
    }

    stack.push(rightIndex);
  }

  return result;
};

(function run() {
  //
  trapStack([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]); //?
  // trapStack([4, 2, 0, 3, 2, 5]); //?
  // trapStack([2, 0, 2]); //?

  trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]); //?
  trap([0, 1, 4, 2, 1, 2, 1, 3, 2, 1, 2, 1]); //?

  // trap([4, 2, 0, 3, 2, 5]); //?
  // trap([2, 0, 2]); //?
})();
