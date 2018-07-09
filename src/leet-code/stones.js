/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const js = J.split('');
  let count = 0;
  for (let c of S) {
    if (js.includes(c)) count++;
  }
  return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
