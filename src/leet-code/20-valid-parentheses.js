/* 
  https://leetcode-cn.com/problems/valid-parentheses/

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0, len = s.length; i < len; i++) {
    const char = s[i];

    switch (char) {
      case '(':
      case '{':
      case '[':
        stack.push(char);
        break;

      case ')':
        if (stack.length < 1 || stack.pop() !== '(') {
          return false;
        }
        break;

      case '}':
        if (stack.length < 1 || stack.pop() !== '{') {
          return false;
        }

        break;

      case ']':
        if (stack.length < 1 || stack.pop() !== '[') {
          return false;
        }

        break;

      default:
        break;
    }
  }

  return stack.length < 1;
};

(function () {
  isValid('{[]}'); //?
  isValid('([)]'); //?
  isValid('(]'); //?
  isValid('(())'); //?
})();
