const UP = 'U';
const DOWN = 'D';
const LEFT = 'L';
const RIGHT = 'R';

/**
 * @param {string} moves
 * @return {boolean}
 */
function judgeCircle(moves) {
  const { length } = moves;
  let countUp = 0;
  let countDown = 0;
  let countLeft = 0;
  let countRight = 0;

  for (let i = 0; i < length; i += 1) {
    const char = moves[i];
    switch (char) {
      case UP:
        countUp += 1;
        break;
      case DOWN:
        countDown += 1;
        break;
      case LEFT:
        countLeft += 1;
        break;
      case RIGHT:
        countRight += 1;
        break;
      default:
        break;
    }
  }
  return countUp === countDown && countLeft === countRight;
}

console.log(judgeCircle('LLDRRU'));
