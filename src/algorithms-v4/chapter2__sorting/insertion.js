const { exch, less, show } = require('./utils');

/*
  不会访问索引右侧的元素
*/

/**
 * 插入排序
 *
 * [1,3,5,2,9,4,...]
 * @param {number[]} a
 */
function sort(a) {
  const n = a.length;
  for (let i = 1; i < n; i += 1) {
    for (let j = i; j > 0 && less(a[j], a[j - 1]); j -= 1) {
      exch(a, j, j - 1);
    }
  }
  return a;
}


/**
 *
 * [(哨兵),3,1,5,2,9,4,...]
 * @param {number[]} a
 * @returns {number[]}
 */
function sortWithGuard(a) {
  const n = a.length;
  for (let i = 2; i < n; i += 1) {
    a[0] = a[i];
    let j;
    for (j = i - 1; less(a[0], a[j]); j -= 1) {
      a[j + 1] = a[j];
    }
    a[j + 1] = a[0];
  }
  return a;
}
let res;
// res = sortWithGuard([0, 1, 3, 5, 2, 9, 7]);
res = sort([1, 1, 2, 2, 3, 2]);
console.log(show(res));
