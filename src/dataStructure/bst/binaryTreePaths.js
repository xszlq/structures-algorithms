const tree = require("./createBST");

const paths = [];
/**
 * https://leetcode.cn/problems/binary-tree-paths/description/
 *
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root, recordPath = []) {
  if (!root) return [];
  recordPath.push(root.val);

  // 是末子节点
  if (!root.left && !root.right) {
    paths.push(recordPath.join("->"));
    return true;
  }

  if (root.left) {
    const result = binaryTreePaths(root.left, recordPath);
    if (result) {
      recordPath.pop();
    }
  }

  if (root.right) {
    const result = binaryTreePaths(root.right, recordPath);
    if (result) {
      recordPath.pop();
    }
  }

  return paths;
};

let bst = new tree.BST();

[1, 2, 3, 4, 5, null, 7].forEach((i) => {
  bst.insert(i);
});

console.log(binaryTreePaths(bst.root));
