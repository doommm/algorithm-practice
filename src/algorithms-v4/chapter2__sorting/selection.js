import { exch, less } from './utils';

/*
  - 0 到 N-1 的任意 i 都会进行一次交换和 N-1-i 次比较
  - 共有 N 次交换，(N-1)+(N-2)+...+2+1 = N(N-1)/2 ~ N²/2 次比较
  - 不会访问索引左侧的元素
*/

/**
 * 选择排序
 * @param {number[]} a 
 */
function sort(a) {
  const n = a.length;
  for (let i = 0; i < n; i += 1) {
    let min = i;
    for (let j = 0; j < n; j++) {
      if (less(a[j], a[min])) {
        min = j;
      }
    }
    exch(a, i, min);
  }
}
