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

const exceptions = {
  4: 'IV',
  9: 'IX',
  40: 'XL',
  90: 'XC',
  400: 'CD',
  900: 'CM',
};

const romanMap = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

const DIGITS = [1000, 100, 10, 1];
const HALF_DIGITS = { 100: 500, 10: 50, 1: 5 };

function divide(a, b) {
  const remainder = a % b;
  const quotient = (a - remainder) / b;
  return { remainder, quotient };
}

function mapDigit(count, divisor) {
  if (count < 1) {
    return '';
  }
  const num = count * divisor;
  if (`${num}` in exceptions) {
    return `${exceptions[num]}`;
  } else {
    let result = '';
    const half = HALF_DIGITS[divisor];
    if (half && num >= half) {
      const halfRemainder = num % half;
      count = halfRemainder / divisor;
      result += romanMap[num - halfRemainder];
    }
    while (count !== 0) {
      result += `${romanMap[divisor]}`;
      count -= 1;
    }
    return result;
  }
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let roman = '';
  let remainder = num;
  let quotient;

  DIGITS.forEach((digit, i) => {
    let r = divide(remainder, digit);
    quotient = r.quotient;
    remainder = r.remainder;
    roman += mapDigit(quotient, digit);
  });

  return roman;
};

const rm = intToRoman(58);
console.log(rm);
