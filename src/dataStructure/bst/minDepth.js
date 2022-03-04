/**
 * 给定一个二叉树，找出其最小深度。

 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

 说明：叶子节点是指没有子节点的节点。

 https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

 解题思路：
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;

    if(!root.left && !root.right){
        return 1;
    }

    let left, right;
    if(root.left) left =  minDepth(root.left);
    if(root.right) right = minDepth(root.right);

    left = left || right;
    right = right || left;

    return Math.min(left, right) + 1;
};
