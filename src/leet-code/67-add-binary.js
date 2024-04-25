/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let ret = '';

  let aIndex = a.length - 1;
  let bIndex = b.length - 1;

  let carry = 0;

  while (aIndex >= 0 || bIndex >= 0) {
    const left = aIndex >= 0 ? Number(a[aIndex]) : 0;
    const right = bIndex >= 0 ? Number(b[bIndex]) : 0;

    const sum = left + right + carry;
    const bit = sum % 2;
    carry = sum >= 2 ? 1 : 0;

    ret = String(bit) + ret;

    aIndex--;
    bIndex--;
  }

  if (carry === 1) {
    ret = '1' + ret;
  }

  return ret;
};

addBinary('11', '1'); //?
addBinary('1010', '1011'); //?
