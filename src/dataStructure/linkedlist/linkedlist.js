
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

    remove(item){
        let curNode = this.find(item);
        let preNode = this.findPreviewNode(item);

        preNode.next = curNode.next;
    }

    findPreviewNode(item){
        let preNode = this.head;
        while (preNode !== null){
            if(preNode.next.element === item){
                return preNode
            }
            preNode = preNode.next;
        }
    }

    display(){
        let curNode = this.head;
        while (curNode.next !== null){
            console.log(curNode.next.element)
            curNode = curNode.next;
        }
    }
}

let ll = new LinkedList();

ll.insert('z3', 'head');
ll.insert('l4', 'z3');

ll.display();

console.log('----------------test remove-------------')

ll.remove('z3');
ll.display();
