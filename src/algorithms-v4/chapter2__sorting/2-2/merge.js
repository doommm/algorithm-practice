const { exch, less, show } = require('../utils');

/**
 * 归并排序
 *
 * 将两个不同的**有序数组**归并为一个更大的**有序数组**
 *
 * @param {number[]} a array
 * @param {number[]} aux helper array
 * @param {number} lo lower index
 * @param {number} mid middle index
 * @param {number} hi higher index
 * @returns {number[]} origin array
 */
function merge(a, aux, lo, mid, hi) {
  let i = lo;
  let j = mid + 1; // mid+1

  for (let k = 0; k < a.length; k += 1) {
    aux[k] = a[k];
  }

  for (let k = lo; k <= hi; k += 1) {
    if (i > mid) {
      a[k] = aux[j];
      j += 1;
    } else if (j > hi) {
      a[k] = aux[i];
      i += 1;
    } else if (less(aux[j], aux[i])) {
      a[k] = aux[j++];
    } else {
      a[k] = aux[i++];
    }
  }

  return a;
}

/**
 * 自顶向下的归并排序
 *
 * @param {number[]} a array
 * @param {number[]} aux helper array
 * @param {number} lo lower index
 * @param {number} hi higher index
 */
function sort(a, aux, lo, hi) {
  /*
   * 分治，递归
   * N = 2^n
   * C(2^n) = 2C(2^(n-1)) + 2^n
   * 比较次数下限: N/2，C(2^n)/2^n = C(2^0)/2^0 + n/2
   * 上限 N，C(2^n)/2^n = C(2^0)/2^0 + n
   * 
   */

  if (hi <= lo) {
    return;
  }
  let mid = Math.floor(lo + (hi - lo) / 2); // floor
  sort(a, aux, lo, mid);
  sort(a, aux, mid + 1, hi); // mid + 1
  merge(a, aux, lo, mid, hi);
}

/**
 * 自底向上的归并排序
 *
 * @param {number[]} a array
 * @param {number[]} aux helper array
 * @returns {number[]} array
 */
function sort2(a, aux) {
  const N = a.length;

  // sz 子数组大小
  for (let sz = 1; sz < N; sz += sz) {
    // lo 子数组索引
    for (let lo = 0; lo < N - sz; lo += sz + sz) {
      merge(a, aux, lo, lo + sz - 1, Math.min(lo + 2 * sz + 1, N - 1));
    }
  }
  return a;
}

(function() {
  let res;
  let aux = [];
  let a = [5, 6, 7, 8, 1, 2, 3, 4];
  // res = merge(a, aux, 0, 3, 7);
  // res = sort(a, aux, 0, 7);
  res = sort2(a, aux);

  console.log(show(res));
})();
