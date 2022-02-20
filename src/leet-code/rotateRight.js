/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head == null || k <= 1) {
    return head;
  }

  let fast = head;
  let slow = head;

  let length = 0;

  while (fast != null) {
    length += 1;
    fast = fast.next;
  }

  fast = head;

  let offset = k % length;

  for (let i = 0; i < offset; i++) {
    fast = fast.next;
  }

  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }

  fast.next = head;
  const newHead = slow.next;
  slow.next = null;

  return newHead;
};
