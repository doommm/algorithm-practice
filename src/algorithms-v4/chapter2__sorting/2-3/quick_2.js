const { less, exch, show } = require('../utils');

function partition(map, left, right) {
  const pivot = map[left];
  let low = left;
  let high = right;
  while (low < high) {
    while (low < high && map[high] >= pivot) {
      high -= 1;
    }
    exch(map, low, high);
    while (low < high && map[low] <= pivot) {
      low += 1;
    }
    exch(map, low, high);
  }
  return low;
}

function qSort(map, low, high) {
  if (low < high) {
    const pivot = partition(map, low, high);
    qSort(map, low, pivot - 1);
    qSort(map, pivot + 1, high);
  }
}

(() => {
  const a = [2, 5, 3, 9, 6, 8, 4, 7, 1];
  qSort(a, 0, a.length - 1);
  console.log(show(a));
})();
