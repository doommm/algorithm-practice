/* eslint-disable */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = (head) => {
  if (head == null || head.next == null) {
    return head;
  }
  let prev = null;
  let slow = head; // mid
  let fast = head; // right

  while (fast != null && fast.next != null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null; // split

  const l1 = sortList(head);
  const l2 = sortList(slow);

  return mergeSort(l1, l2);
};

function mergeSort(l1, l2) {
  const l = new ListNode(0);
  let p = l;

  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
  }

  if (l1 != null) {
    p.next = l1;
  }
  if (l2 != null) {
    p.next = l2;
  }

  return l.next;
}

const n3 = { val: 3, next: null };
const n2 = { val: 2, next: n3 };
const n1 = { val: 1, next: n2 };
const n0 = { val: 4, next: n1 };

let nn0 = sortList(n0);
while (nn0 != null) {
  console.log(nn0);
  nn0 = nn0.next;
}
