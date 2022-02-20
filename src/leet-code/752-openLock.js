/* 
  https://leetcode-cn.com/problems/open-the-lock/

  tags: 广度优先搜索

  tips: We can think of this problem as a shortest path problem on a graph: there are `10000` nodes (strings `'0000'` to `'9999'`), and there is an edge between two nodes if they differ in one digit, that digit differs by 1 (wrapping around, so `'0'` and `'9'` differ by 1), and if *both* nodes are not in `deadends`.

*/

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  //

  const queue = ['0000'];
  let level = 0;
  const visited = new Set(deadends);

  while (queue.length > 0) {
    let size = queue.length;

    while (size > 0) {
      size -= 1;

      const curr = queue.shift();

      if (visited.has(curr)) {
        continue;
      }

      if (curr === target) {
        return level;
      }

      visited.add(curr);

      for (let i = 0; i < 4; i++) {
        const c = curr.charAt(i);

        const add =
          curr.substring(0, i) +
          (c === '9' ? '0' : `${+c + 1}`) +
          curr.substring(i + 1);

        const sub =
          curr.substring(0, i) +
          (c === '0' ? '9' : `${+c - 1}`) +
          curr.substring(i + 1);

        if (!visited.has(add)) {
          queue.push(add);
        }

        if (!visited.has(sub)) {
          queue.push(sub);
        }
      }
    }

    level += 1;
  }

  return -1;
};

const n = openLock(['0201', '0101', '0102', '1212', '2002'], '0202'); //?
console.log(n);
