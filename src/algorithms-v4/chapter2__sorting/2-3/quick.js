const { exch, less, show } = require('../utils');
const insertion = require('../insertion');

/**
 * 切分函数
 * @param {number[]} a array
 * @param {number} lo low index
 * @param {number} hi high index
 * @returns {number} mid index
 */
function partition(a, lo, hi) {
  let i = lo;
  let j = hi + 1;
  let v = a[lo];
  while (true) {
    while (less(a[++i] < v)) {
      if (i === hi) {
        break;
      }
    }

    while (less(v, a[--j])) {
      if (j === lo) {
        break;
      }
    }

    if (i >= j) {
      break;
    }

    exch(a, i, j);
  }

  /* 
    由于采用 a[++i], a[--j] 取数组元素
    此时 j 指向不大于 v 的最后一个元素, i 指向不小于 v 的第一个元素
    故调换 a[lo] 与 a[j] 的值
  */
  exch(a, lo, j);
  return j;
}

/**
 * 快速排序
 *
 * @param {number[]} a array
 * @param {number} lo low index
 * @param {number} hi high index
 */
function sort(a, lo, hi) {
  if (hi <= lo) {
    return;
  }
  const j = partition(a, lo, hi);
  sort(a, lo, j);
  sort(a, j + 1, hi);
}

module.exports.sort = sort;

(() => {
  const a = [2, 3, 5, 1, 9, 10, 6, 7];
  sort(a, 0, a.length - 1);
  console.log(show(a));
})();
