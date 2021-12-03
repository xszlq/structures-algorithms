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

class BST {
  constructor (){
    this.root = null;
  }
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
  inOrder(node){
    if(node !== null){
      this.inOrder(node.left);
      console.log(' ', node.data)
      this.inOrder(node.right);
    }
  }

  preOrder(node){
    if(node !== null){
      console.log(' ', node.data)
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node){
    if(node !== null){
      console.log(' ', node.data)
      this.postOrder(node.left);
      this.postOrder(node.right);
    }
  }
}

let ins = new BST();
[23, 45, 16,37, 3, 8, 9, 99, 22].forEach(i=>ins.insert(i));

ins.preOrder(ins.root);
console.log('xxxxxxxxxx')

ins.postOrder(ins.root);