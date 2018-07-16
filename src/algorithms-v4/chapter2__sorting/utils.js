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
 * @param {number|string} a value `a`
 * @param {number|string} b value `b`
 * @returns {-1|0|1} returned value
 */
function compareTo(a, b) {
  if (typeof a !== typeof b) {
    throw new Error(
      `parameters 'a' and 'b' must be of the same type.\n
      typeOf a:${typeof a}, typeof b:${typeof b}`,
    );
  }
  if (a > b) {
    return 1;
  }
  if (a === b) {
    return 0;
  }
  return -1;
}

/**
 *
 * @param {number|string} a value `a`
 * @param {number|string} b value `b`
 * @returns {boolean} `a` is less than `b`
 */
function less(a, b) {
  return a < b;
}

/**
 * map a array to a string (use `Array.map` and `Object.toString`)
 * @param {any[]} array the array to map
 * @returns {string} the output string
 */
function show(array) {
  return array.map((a) => a.toString()).join(' ');
}

/**
 *
 * @param {number[]} a the array to check
 * @returns {boolean} return true if the array is sorted
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
exports.compareTo = compareTo;
