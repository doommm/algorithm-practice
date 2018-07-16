const { less, exch, compareTo, show } = require('../utils');

/**
 * 三向切分的快速排序
 *
 * @param {any[]} a array
 * @param {number} lo low index
 * @param {number} hi high index
 */
function sort(a, lo, hi) {
  if (hi <= lo) {
    return;
  }

  let lt = lo;
  let i = lo + 1;
  let gt = hi;

  const v = a[lo];

  while (i <= gt) {
    const cmp = compareTo(a[i], v);
    if (cmp < 0) {
      exch(a, lt, i);
      lt += 1;
      i += 1;
    } else if (cmp > 0) {
      exch(a, i, gt);
      gt -= 1;
    } else {
      i += 1;
    }
  }

  sort(a, lo, lt - 1);
  sort(a, gt + 1, hi);
}

(function run() {
  const a = ['b', 'a', 'd', 'c', 'aa', 'eg'];
  sort(a, 0, a.length - 1);
  console.log(show(a));
})();
