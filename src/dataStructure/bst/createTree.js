function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

class Tree{
    constructor(root) {
        this.root = new TreeNode(root)
    }

    insert(v){
        let node = new TreeNode(v);
        let queue = [this.root];

        while (queue.length){
            let cur = queue.shift();

            if(!cur.left){
                cur.left = node;
                break;
            }

            if(!cur.right){
                cur.right = node;
                break;
            }
            queue.push(cur.left, cur.right,);
        }
    }

    inOrder(node){
        if(!node) return ;
        console.log(node.val)
        this.inOrder(node.left);
        this.inOrder(node.right);
    }
}

let bst = new Tree(0);

[1,2,3,4,5,6,7].forEach(i=>{
    bst.insert(i);
})

bst.inOrder(bst.root);
