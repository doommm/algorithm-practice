/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function reverse(head) {
  if (!head || !head.next) {
    return head;
  }

  let pre = null;
  let next = null;
  let current = head;

  while (current != null) {
    next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }

  return pre;
};
