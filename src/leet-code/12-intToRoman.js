/*
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000

  通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。
  数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。
  同样地，数字 9 表示为 IX。
  这个特殊的规则只适用于以下六种情况：

  I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
  X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
  C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

  给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。
*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let res = '';
  const roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  const value = [1000, 500, 100, 50, 10, 5, 1];

  const length = value.length;

  for (let n = 0; n < length; n += 2) {
    const digit = value[n];

    let x = Math.floor(num / digit);

    if (x < 4) {
      for (let i = 1; i <= x; i += 1) {
        res += roman[n];
      }
    } else if (x === 4) {
      res += roman[n] + roman[n - 1];
    } else if (x > 4 && x < 9) {
      // 小于等于 5XXX... 的部分
      res += roman[n - 1];
      // 大于 5XXX... 的部分
      for (let i = 6; i <= x; i += 1) {
        res += roman[n];
      }
    } else if (x === 9) {
      res += roman[n] + roman[n - 2];
    }

    num %= digit;
  }
  return res;
};

const rm = intToRoman(1994);
console.log(rm);
