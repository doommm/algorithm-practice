// /**
//  * @param {number[]} A
//  * @return {number}
//  */
// var peakIndexInMountainArray = function(A) {
//   const length = A.length;
//   let result = -1;

//   function moreThanLeft(current) {
//     for (let i = current; i >= 1; i--) {
//       let vCurrent = A[i];
//       let vNext = A[i - 1];
//       if (vNext >= vCurrent) {
//         return false;
//       }
//     }
//     return true;
//   }

//   function moreThanRight(current) {
//     for (let i = current; i < length; i++) {
//       let vCurrent = A[i];
//       let vNext = A[i + 1];
//       if (vNext >= vCurrent) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 1; i < length; i++) {
//     if (moreThanLeft(i) && moreThanRight(i)) {
//       result = i;
//       break;
//     }
//   }
//   return result;
// };

/**
 * 题意为已经确定的山脉数组，故不需遍历左右分支
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  const length = A.length;
  let i = 1;
  let result;
  while (i <= length - 1) {
    let vI = A[i];
    if (A[i - 1] < vI && vI > A[i + 1]) {
      return i;
    } else {
      i++;
    }
  }
};

var ind = peakIndexInMountainArray([0, 1, 2, 0]);
ind;
