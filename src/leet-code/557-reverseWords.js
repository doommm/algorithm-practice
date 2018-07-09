/*
  Given a string, you need to reverse the order of characters in each word within a sentence
  while still preserving whitespace and initial word order.

  Input: "Let's take LeetCode contest"
  Output: "s'teL ekat edoCteeL tsetnoc"
*/

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  return s
    .split(' ')
    .map(word =>
      word
        .split('')
        .reverse()
        .join(''),
    )
    .join(' ');
}

console.log(reverseWords(`Let's take LeetCode contest`));
