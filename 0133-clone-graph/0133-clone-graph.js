/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/*
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  let stack = [];
  let visited = new Map();
  let clone = new Map();

  if (!node) {
    return null;
  }
  if (!node.neighbors.length) {
    return {val: node.val, neighbors: []};
  }

  // DFS
  stack.push(node);

  while (stack.length) {
    let current = stack.pop();

    if (!visited.has(current)) {
      let list = [];
      let cloneVertex;

      for (let i = 0; i < current.neighbors.length; i++) {
        stack.push(current.neighbors[i]);
        list.push(current.neighbors[i].val);
      }
      cloneVertex = {val: current.val, neighbors: list};
      visited.set(current, true);
      if (!clone.has(cloneVertex)) {
        clone.set(current.val, cloneVertex);
      }
    }
  }

  let iter = clone.values();
  let flag = false;
  while (true) {
    let vertex = iter.next().value;
    if (!flag) {
      node = vertex;
      flag = true;
    }
    if (!vertex) break;
    // console.log(vertex);
    for (let i in vertex.neighbors) {
      vertex.neighbors[i] = clone.get(vertex.neighbors[i]);
    }
    clone.set(vertex.val, vertex);
    // console.log(clone.get(vertex.val));
  }

  return node;
};