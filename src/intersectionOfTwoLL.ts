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

 export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) { return null }

    let cachedA: object = {};
    let curA: ListNode | null = headA;
    
    while (curA) {
        
        if (curA.val in cachedA) { cachedA[curA.val].push(curA) }
        else { cachedA[curA.val] = [curA] }
        curA = curA.next
        
    }
    
    let curB: ListNode = headB;

    
    while (curB) {

        if (curB.val in cachedA) { 
            
            if(cachedA[curB.val].indexOf(curB) > -1) { return curB }

        }
        curB = curB.next
    }
    
    return null;
};