
class Node{
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

// 一个链表有插入、查询、删除
class LinkedList{
    constructor() {
        this.head = new Node('head');
    }

    find(item){
        let curNode = this.head;
        while (item !== curNode.element){
            curNode = curNode.next;
        }

        return curNode;
    }

    insert(newElement, item){
        let node = new Node(newElement);
        let curNode = this.find(item);

        node.next = curNode.next;
        curNode.next = node;
    }

    remove(){

    }

    display(){

    }
}
