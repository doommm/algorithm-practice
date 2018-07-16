/**
 * exchange elements in array with indices i and j
 * @param {any[]} array 
 * @param {number} i 
 * @param {number} j 
 */
function exch(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

/**
 * 
 * @param {number} v 
 * @param {number} w 
 * @returns {boolean}
 */
function less(v, w) {
  return v < w;
}

/**
 * 
 * @param {any[]} array 
 */
function show(array) {
  return array.map((a) => a.toString()).join(' ');
}

/**
 * 
 * @param {number[]} a 
 * @returns {boolean}
 */
function isSorted(a) {
  const n = a.length;
  for (let i = 1; i < n; i += 1) {
    if (less(a[i], a[i - 1])) {
      return false;
    }
  }
  return true;
}

exports.isSorted = isSorted;
exports.less = less;
exports.exch = exch;
exports.show = show;

