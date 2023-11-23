function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

class Tree {
  constructor() {}

  insert(v) {
    if (!this.root) {
      this.root = new TreeNode(v);
      return;
    }
    // 可能有null节点
    let node = v === null ? null : new TreeNode(v);
    let queue = [this.root];

    while (queue.length) {
      let cur = queue.shift();

      if (!cur.left) {
        cur.left = node;
        break;
      }

      if (!cur.right) {
        cur.right = node;
        break;
      }

      // 兼容节点为null
      if (cur.left) {
        queue.push(cur.left);
      }

      // 兼容节点为null
      if (cur.right) {
        queue.push(cur.right);
      }
    }
  }

  inOrder(node) {
    if (!node) return;
    console.log(node.val);
    this.inOrder(node.left);
    this.inOrder(node.right);
  }
}

let bst = new Tree();

[1, 2, 3, null, 5].forEach((i) => {
  bst.insert(i);
});

bst.inOrder(bst.root);
