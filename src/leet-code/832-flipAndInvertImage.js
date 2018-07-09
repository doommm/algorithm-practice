/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  const length = A.length;
  for (let i = 0; i < length; i++) {
    A[i] = A[i].reverse().map(n => invert(n));
  }
  return A;
};

/**
 *
 *
 * @param {number} num
 */
function invert(num) {
  return Number(!num);
}

const rr = flipAndInvertImage(
  [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]],
  // [[1, 1, 0], [1, 0, 1], [0, 0, 0]],
);
rr;
