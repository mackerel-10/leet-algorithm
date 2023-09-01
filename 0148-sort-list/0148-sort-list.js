/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  let cur, temp;
  let origin = head;

  if (head === null) {
    return head; 
  }

  while (head.next !== null) {
    cur = head.next;
    while (cur !== null) {
      if (head.val > cur.val) {
        temp = head.val;
        head.val = cur.val;
        cur.val = temp;
      }
      cur = cur.next;
    }
    head = head.next;
  }

  console.log("origin", origin);
  return origin;
};