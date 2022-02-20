const { exch, less, show } = require('./utils');

/**
 * 冒泡排序
 * @param {any[]} array asdf
 * @returns {any[]} array
 */
function bubble(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = array.length - 1; j >= i; j -= 1) {
      if (array[j - 1] > array[j]) {
        exch(array, j - 1, j);
      }
    }
  }
  return array;
}

/**
 * 优化冒泡排序
 * @param {any[]} array asdf
 * @returns {any[]} array
 */
function bubbleOps(array) {
  let flag = true;
  for (let i = 0; i < array.length && flag; i += 1) {
    flag = false;
    for (let j = array.length - 1; j >= i; j -= 1) {
      if (array[j - 1] > array[j]) {
        exch(array, j - 1, j);
        flag = true;
      }
    }
  }
  return array;
}

console.log(show(bubbleOps([9, 1, 5, 8, 3, 7, 4, 6, 2])));
