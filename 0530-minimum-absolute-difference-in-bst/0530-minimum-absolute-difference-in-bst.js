/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var getMinimumDifference = function(root) {
  let valueList = [];
  let min = Number.MAX_SAFE_INTEGER;

  function bst(node) {
    if(node) {
      bst(node.left);
      valueList.push(node.val);
      bst(node.right);
    }
  }

  bst(root);

  let sub;
  for (let i = 0; i < valueList.length - 1; i++) {
    sub = valueList[i + 1] - valueList[i];
    if (sub < min) {
      min = sub;
    }
  }

  return min;
};