class Node{
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

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
        let newNode = new Node(newElement);
        let curNode = this.find(item);

        if(curNode.next) curNode.next.previous = newNode;
        newNode.previous = curNode;
        newNode.next = curNode.next;
        curNode.next = newNode;
    }

    remove(item){
        let curNode = this.find(item);

        if(curNode.next !== null){
            curNode.previous.next = curNode.next;
            curNode.next.previous = curNode.previous
        }


        curNode.next = null;
        curNode.previous = null;
    }

    display(){
        let curNode = this.head;
        while (curNode !== null){
            console.log(curNode.element)
            curNode = curNode.next;
        }
    }
}

let ll = new LinkedList();

ll.insert('1', 'head');
ll.insert('2', '1');
ll.insert('3', '1');
ll.insert('4', '3');
ll.display();

console.log('----------------test remove-------------')

ll.remove('3');
ll.display();
