const tree = require("./createBST");

let bst = new tree.BST();

[1, 2, 3, null, 5].forEach((i) => {
  bst.insert(i);
});

const paths = [];
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root, recordPath = []) {
  if (!root) return [];
  recordPath.push(root.val);

  // 是末子节点
  if (!root.left && !root.right) {
    return true;
  }

  if (root.left) {
    const result = binaryTreePaths(root.left, recordPath);
    if (result) {
      paths.push(recordPath.join("->"));
      recordPath.pop();
    }
  }

  if (root.right) {
    const result = binaryTreePaths(root.right, recordPath);
    if (result) {
      paths.push(recordPath.join("->"));
      recordPath.pop();
    }
  }

  return paths;
};

console.log(binaryTreePaths(bst.root));
