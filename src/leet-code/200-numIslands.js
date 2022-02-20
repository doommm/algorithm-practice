/**
 * https://leetcode-cn.com/problems/number-of-islands
 * @param {string[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  //
  let count = 0;

  let m = grid.length;

  for (let i = 0; i < m; i++) {
    let n = grid[i].length;

    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        infect(grid, i, j);
        count += 1;
      }
    }
  }

  return count;
};

/**
 *
 * @param {string[][]} grid
 * @param {number} i
 * @param {number} j
 */
var infect = function (grid, i, j) {
  if (i < 0 || j < 0) {
    return;
  }
  if (i > grid.length - 1 || j > grid[i].length - 1) {
    return;
  }
  if (grid[i][j] !== '1') {
    return;
  }

  grid[i][j] = '0';

  infect(grid, i + 1, j);
  infect(grid, i - 1, j);

  infect(grid, i, j + 1);
  infect(grid, i, j - 1);
};
