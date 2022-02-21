/*
* 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
* https://leetcode-cn.com/problems/remove-linked-list-elements/
* */

// 解题思路 考虑到链表头部删除不好处理 直接添加一个头节点
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let ret = new ListNode(0, head)

    let cur = ret;
    while(cur.next){
        // 删除
        if(cur.next.val === val){
            cur.next = cur.next.next;
            continue;
        }
        cur = cur.next
    }

    return ret.next;
};
