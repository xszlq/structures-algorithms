/**
 * 将数组表示二叉树转换为指针结构
 *
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root;

    let left = root.left;
    let right = root.right;
    root.right = left;
    root.left = right;

    invertTree(root.left)
    invertTree(root.right)

    return root;
};
