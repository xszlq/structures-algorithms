/**
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * https://leetcode-cn.com/problems/reverse-linked-list/
 */

// 思路 1.新创建一个链表，用创建链表的逆过程来构建链表
// 2.思路1会新分配一个链表的内存空间，有没有办法直接修改原链表呢？答案是用双指针

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var reverseList = function(head) {
  if(!head || !head.next) return head;

  let lastNode = new ListNode(head.val);

  let cur = head;
  while(cur.next){
    cur = cur.next;
    let node = new ListNode(cur.val);
    node.next = lastNode;
    lastNode = node;
  }

  return lastNode;
};

// 双指针版本
var reverseList = function(head) {
  if(!head || !head.next) return head;
  let temp = null, pre = null, cur = head;
  while(cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  // temp = cur = null;
  return pre;
};