class Node {
  constructor (data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show(){
    return this.data;
  }
}

// 二叉查找树
class BST {
  constructor (){
    this.root = null;
  }
  // 插入
  insert(data){
    let newNode = new Node(data, null, null);

    if(this.root === null){
      this.root = newNode;
    }else{
      let parent;
      let curNode = this.root;
      while (true){
        parent = curNode;

        // 放到左边节点
        if(data < curNode.data){
          curNode = curNode.left;
          if(curNode === null){
            parent.left = newNode
            break;
          }
        }
        // 放到右边节点
        else{
          curNode = curNode.right;
          if(curNode === null){
            parent.right = newNode
            break;
          }
        }
      }
    }
  }
  // 中序
  inOrder(node){
    if(node !== null){
      this.inOrder(node.left);
      console.log(' ', node.data)
      this.inOrder(node.right);
    }
  }
  // 先序
  preOrder(node){
    if(node !== null){
      console.log(' ', node.data)
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  // 后序
  postOrder(node){
    if(node !== null){
      console.log(' ', node.data)
      this.postOrder(node.left);
      this.postOrder(node.right);
    }
  }

  // 查找最小值
  getMin(){
    let curNode = this.root;
    while (curNode.left !== null){
      curNode = curNode.left;
    }
    return curNode.data;
  }
  // 查找最大值
  getMax(){
    let curNode = this.root;
    while (curNode.right !== null){
      curNode = curNode.right;
    }
    return curNode.data;
  }
  // 查找节点
  find(data){
    let curNode = this.root;

    while (curNode !== null){
      if(curNode.data === data) return curNode;

      curNode = curNode.data < data ? curNode.right : curNode.left
    }

    return null;
  }
  // 删除节点 todo
}

let ins = new BST();
[23, 45, 16,37, 3, 8, 9, 99, 22].forEach(i=>ins.insert(i));

ins.preOrder(ins.root);
console.log('xxxxxxxxxx')

ins.postOrder(ins.root);

console.log(ins.getMin())
console.log(ins.getMax())

console.log(ins.find(8));