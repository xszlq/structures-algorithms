// 判断一个链表是否为循环链表

function Node(value) {
  this.value = value;
  this.next = null;
}

let head = new Node(0);
let node1 = new Node(1);
let node2 = new Node(2);
head.next = node1;
node1.next = node2;
// node2.next = head;

function testIsCircle(list) {
  let cur = list;
  let headValue = list.value;
  while (cur.next) {
    cur = cur.next;
    if (cur.value === headValue) {
      return true;
    }
  }
  return false;
}

// 数组转链表
function arrToList(arr) {
  let head, cur;

  arr.forEach((i) => {
    if (!head) {
      head = new Node(i);
      cur = head;
    } else {
      cur.next = new Node(i);

      cur = cur.next;
    }
  });

  return head;
}

function showList(head) {
  let cur = head;

  while (cur) {
    console.log(cur.value);
    cur = cur.next;
  }
}

let list1 = arrToList([1, 2, 3, 4]);
