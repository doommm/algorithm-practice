/*
  给定两个表示复数的字符串。

  返回表示它们乘积的字符串。注意，根据定义 i2 = -1 。

  示例 1:

  输入: "1+1i", "1+1i"
  输出: "0+2i"
  解释: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i ，你需要将它转换为 0+2i 的形式。
  示例 2:

  输入: "1+-1i", "1+-1i"
  输出: "0+-2i"
  解释: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i ，你需要将它转换为 0+-2i 的形式
  
  ---

  (a1+b1i)*(a2+b2i) = a1a2 - b1b2 + (a1b2+a2b1)i
*/

const match = (function() {
  const PATTERN = /(-?\d+)\+(-?\d+)i/;
  return function(pattern) {
    const matches = PATTERN.exec(pattern);
    return [Number(matches[1] || 0), Number(matches[2] || 0)];
  };
})();

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function complexNumberMultiply(a, b) {
  const [a1, b1] = match(a);
  const [a2, b2] = match(b);
  return `${a1 * a2 - b1 * b2}+${a1 * b2 + a2 * b1}i`;
}

const result = complexNumberMultiply('1+-1i', '1+-1i');
// const result = complexNumberMultiply('1+1i', '1+1i');
console.log(result);
