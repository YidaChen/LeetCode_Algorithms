/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var rev = null,
        cur = head,
        temp;
    
    while(cur){
        temp = cur.next;
        cur.next = rev;
        rev = cur;
        cur = temp;
    }
    return rev;
};
