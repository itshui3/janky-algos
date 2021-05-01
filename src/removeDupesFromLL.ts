// This is an input class. Do not edit.
export class LinkedList {
value: number;
next: LinkedList | null;

constructor(value: number) {
    this.value = value;
    this.next = null;
}
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
// Write your code here.
    let cur = linkedList;
    
    while (cur.next) {
        
        if (cur.value === cur.next.value) {
            let nx = cur.next;
            cur.next = cur.next.next;
            nx.next = null;
        } else {
            cur = cur.next;
        }
        
    }
    
return linkedList;
}