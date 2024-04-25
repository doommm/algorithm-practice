/* 
  二叉树迭代遍历
  https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E8%BF%AD%E4%BB%A3%E9%81%8D%E5%8E%86.html#%E6%80%9D%E8%B7%AF
  https://icejoywoo.github.io/2020/03/31/binary-tree-traversal.html
*/

/**
 * 中序遍历（左中右）
 * @param {TreeNode} root
 */
function inOrder(root) {
  const stack = [];

  let node = root;
  while (stack.length > 0 || node != null) {
    if (node != null) {
      stack.push(node);

      node = node.left;
    } else {
      node = stack.pop();

      // do something
      node.val;

      node = node.right;
    }
  }

  /* 
    [5]
    [5,4]
    [5,4,1]
    [5,4] node=1
    [5] node=4 -> [5,2]
    [5] node=2
    [] node=5 -> node=6
    [6]
  */
}

/**
 * 前序遍历(中左右)
 * @param {TreeNode} root
 */
function preOrder(root) {
  if (root == null) return;

  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    // do something to node
    node.val;

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }
}

/**
 * 后序遍历（左右中）
 * @param {TreeNode} root
 */
function postOrder(root) {
  if (root == null) return;

  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    // do something
    node.val;

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  // reverse 结果，从而得到后序遍历的结果
}
