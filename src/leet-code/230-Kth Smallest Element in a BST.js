/* 
  二叉搜索树中第K小的元素
  https://leetcode.cn/problems/kth-smallest-element-in-a-bst/submissions/510202815/

  二叉树的迭代遍历:
  https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E8%BF%AD%E4%BB%A3%E9%81%8D%E5%8E%86.html#%E6%80%9D%E8%B7%AF
*/

function TreeNode(val) {
  this.val = val;
  this.left = val;
  this.right = val;
}

/**
 *
 * @param {TreeNode} root treenode
 * @param {number} k k
 * 基于迭代的写法。递归要更容易理解一些
 */
var kthSmallest = function (root, k) {
  let count = k;

  const stack = [];
  let node = root;

  while (node != null || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    count--;
    if (count === 0) {
      break;
    }
    node = node.right;
  }

  return node.val;
};

/**
 *
 * @param {TreeNode} root treenode
 * @param {number} k k
 */
var kthSmallestDFS = function (root, k) {
  let count = k;
  let target = root;

  /**
   * @param {TreeNode} node
   * 二叉搜索树的中序递归遍历
   */
  function dfs(node) {
    if (node == null || count <= 0) return;

    dfs(node.left);

    count--;

    if (count === 0) {
      target = node;
      return;
    }

    dfs(node.right);
  }

  dfs(root);

  return target.val;
};
