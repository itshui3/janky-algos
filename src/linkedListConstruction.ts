// This is an input class. Do not edit.
export class Node {
    value: number;
    prev: Node | null;
    next: Node | null;
  
    constructor(value: number) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
// Feel free to add new properties and methods to the class.
export class DoublyLinkedList {
head: Node | null;
tail: Node | null;

constructor() {
    this.head = null;
    this.tail = null;
}

setHead(node: Node) {
    // Write your code here.
/*
if node pre-existent: move to head
[0] node already at head (covers 1 node case) - do nothing
[2] node is tail but not head
[3] node is between other nodes

if node not existent: 
[0] if head && tail not null
[1] if head && tail null
*/  if (this.head === null || this.tail === null) {
        [this.head, this.tail] = [node, node];
        return this;
    }
    let cur = this.head;
// I need some way to indicate whether this loop has performed setHead
    while (cur !== null) {
        if (cur === node) {
            if (cur === this.head) return this;
            if (cur === this.tail && this.tail && cur.prev) {
                cur.prev.next = null;
                this.tail = cur.prev;
                this.tail.next = null;
                node.prev = null;
                
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
                
                return this;
            }

            if (node.prev && node.next) {
                let p = node.prev;
                let n = node.next;
                
                [p.next, n.prev] = [node.next, node.prev];
                node.prev = null;
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
                return this;
            }

        }
    }
    

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    return this;

}

setTail(node: Node) {
    // Write your code here.
        this.tail = node;
}

insertBefore(node: Node, nodeToInsert: Node) {
    // Write your code here.
}

insertAfter(node: Node, nodeToInsert: Node) {
    // Write your code here.
}

insertAtPosition(position: number, nodeToInsert: Node) {
    // Write your code here.
}

removeNodesWithValue(value: number) {
    // Write your code here.
}

remove(node: Node) {
    // Write your code here.
}

containsNodeWithValue(value: number) {
    // Write your code here.
    return false;
}
}