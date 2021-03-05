/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
}

 function hasCycle(head: ListNode | null): boolean {
    let cycleCache: object = {};
    
    let cur = head;
    
    while (cur) {
        if (cur.val in cycleCache) {
            if (cycleCache[cur.val].indexOf(cur) > -1) {
                return true
            } else { cycleCache[cur.val].push(cur) }
        } else { cycleCache[cur.val] = [cur] }
        
        cur = cur.next
    }
    
    return false
};