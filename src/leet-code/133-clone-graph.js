/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (node.neighbors.length < 1) {
    return new Node(node.val, []);
  }

  const visited = new Map();

  const dfs = (n) => {
    if (visited.has(n.val)) {
      return visited.get(n.val);
    }

    const cloned = new Node(n.val, undefined);

    visited.set(n.val, cloned);

    cloned.neighbors = n.neighbors.map((e) => dfs(e));

    return cloned;
  };

  const head = dfs(node);

  return head;
};

function test() {
  const n1 = new Node(1, []);
  const n2 = new Node(2, []);
  const n3 = new Node(3, []);
  const n4 = new Node(4, []);

  n1.neighbors = [n2, n4];
  n2.neighbors = [n1, n3];
  n3.neighbors = [n2, n4];
  n4.neighbors = [n1, n3];

  cloneGraph(n1);
}

test();
