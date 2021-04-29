export class Node {
    name: string;
    children: Node[];

    constructor(name: string) {
        this.name = name;
        this.children = [];
    }

    addChild(name: string): Node {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array: string[]) {
        // Write your code here.
            let order: Node[] = [];
            order.push(this);
            
            let i = 0;
            
            while (i < order.length) {
                array.push(order[i].name);
                
                for (let c = 0; c < order[i].children.length; c++) {
                    order.push(order[i].children[c]);
                }
                
                i++;
            }
            
        return array;
    }
}
