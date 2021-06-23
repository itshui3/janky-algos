// implenting a doubly linked list in javascript
// This is an input class. Do not edit.
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// Feel free to add new properties and methods to the class.
    class DoublyLinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
    }
    
// take a disconnected node and place on head
    setHead(node) {
        // Write your code here.
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else if (this.head !== node) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
            
    }

// take a disconnected node and place on tail
    setTail(node) {
        // Write your code here.
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        } else if (this.tail !== node) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
            
    }

    insertBefore(node, nodeToInsert) {
        // Write your code here.
        if (this.head === null) return;
        
        let cur = this.head;
        
        while (cur) {
            if (cur === node) {
                let prev = cur.prev;
                let next = cur;
                
                prev.next = node;
                next.prev = node;
                
                node.prev = prev;
                node.next = next;
                
                break;
            } else {
                cur = cur.next;
            }
        }
            
    }

    insertAfter(node, nodeToInsert) {
        // Write your code here.
        if (this.head === null) return;
        
        let cur = this.head;
        
        while (cur) {
            if (cur === node) {
                let prev = cur;
                let next = cur.next;
                
                prev.next = node;
                next.prev = node;
                
                node.prev = prev;
                node.next = next;
                
                break;
            } else {
                cur = cur.next;
            }
        }
    }

    insertAtPosition(position, nodeToInsert) {
        // Write your code here.
        if (this.head === null) return;
        
        let i = 0;
        let cur = this.head;
            
            
    }

    removeNodesWithValue(value) {
        // Write your code here.
            
    }

    remove(node) {
        // Write your code here.
        if (this.head === node && this.tail === node) {
            this.head = null;
            this.tail = null;
            return;
        }
        
        if (this.head === node) {
            this.head = node.next;
            this.remove(node);
        }
        
        if (this.tail === node) {
            this.tail = node.prev;
            this.remove(node);
        }
        
        let prev = node.prev;
        let next = node.next;
        
        if (prev) prev.next = next;
        if (next) next.prev = prev;
        
        node.next = null;
        node.prev = null;
    }

    containsNodeWithValue(value) {
        // Write your code here.
        let cur = this.head;
        
        while (cur) {
            if (cur.value === value) return true;
            cur = cur.next;
        }
        
        return false;
    }
}