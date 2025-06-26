/* 
  翻转二叉树
  https://leetcode.cn/problems/invert-binary-tree/?envType=study-plan-v2&envId=top-100-liked
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @typedef TreeNode
 * @property {number} val
 * @property {TreeNode | null} left
 * @property {TreeNode | null} right
 */

/**
 * 翻转二叉树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  function invert(node) {
    if (node == null || (node.left == null && node.right == null)) return;
    const left = node.left;
    node.left = node.right;
    node.right = left;

    invert(node.left);
    invert(node.right);
  }

  invert(root);

  return root;
};

/**
 * 翻转二叉树（广度优先遍历）
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTreeBFS = function (root) {
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.shift();
    if (node == null) {
      continue;
    }

    if (node.left != null) {
      stack.push(node.left);
    }
    if (node.right != null) {
      stack.push(node.right);
    }

    const left = node.left;
    node.left = node.right;
    node.right = left;
  }

  return root;
};
