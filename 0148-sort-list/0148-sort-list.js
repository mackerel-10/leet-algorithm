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
  if (head === null) {
    return head; 
  }

  let pointer = head;
  let arr = [];
  while (pointer) {
    arr.push(pointer.val);
    pointer = pointer.next;
  }

  arr.sort((a, b) => a - b);

  pointer = head;
  for (let i = 0; i < arr.length; i++) {
    pointer.val = arr[i];
    pointer = pointer.next;
  }

  return head;
};