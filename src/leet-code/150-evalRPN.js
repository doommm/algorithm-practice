/* 
  https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
  
  根据 逆波兰表示法，求表达式的值。
  https://baike.baidu.com/item/%E9%80%86%E6%B3%A2%E5%85%B0%E5%BC%8F/128437

  有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (let i = 0, len = tokens.length; i < len; i++) {
    const char = tokens[i];

    if (/^[\+\-*/]$/.test(char)) {
      const right = stack.pop();
      const left = stack.pop();

      switch (char) {
        case '+':
          stack.push(left + right);
          break;
        case '-':
          stack.push(left - right);
          break;
        case '*':
          stack.push(left * right);
          break;
        case '/':
          stack.push(parseInt(left / right));
          break;

        default:
          break;
      }
    } else {
      stack.push(+char);
    }
  }

  return stack[0];
};

evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']); //?
