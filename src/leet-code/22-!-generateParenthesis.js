/*
  给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

  例如，给出 n = 3，生成结果为：

  [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
  ]

  回溯
*/

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const result = [];

  function parse(str, left, right) {
    if (left > right) {
      return;
    }

    if (left > 0) {
      parse(`${str}(`, left - 1, right);
    }

    if (right > 0) {
      parse(`${str})`, left, right - 1);
    }

    if (left === 0 && right === 0) {
      result.push(str);
    }
  }
  parse('', n, n);
  return result;
}

const res = generateParenthesis(3);
console.log(res.length);
console.log(res);
