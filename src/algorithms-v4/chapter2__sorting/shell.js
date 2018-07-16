const { exch, less } = require('./utils');

/**
 * 希尔排序
 *
 * @param {number[]} a
 * @returns {number[]}
 */
function sort(a) {
  const N = a.length;
  let h = 1;
  while (h < N / 3) {
    h = 3 * h + 1;
  }
  while (h >= 1) {
    /* 
      将数组变为 h 有序
      (0 <--> h) , (h <--> 2h) , (2h <--> 3h)... 依次进行排序
    */
    for (let i = h; i < N; i += 1) {
      // 将 a[i] 插入到 a[i-h], a[i-2h], a[i-3h]...
      for (let j = i; j >= h && less(a[j], a[j - h]); j -= h) {
        exch(a, j, j - h);
      }
    }
    h = Math.floor(h / 3);
  }
  return a;
}

const res = sort([1, 6, 10, 8, 3, 5, 2, 9, 7]);
console.log(show(res));
