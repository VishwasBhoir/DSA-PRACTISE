/* **** THIS IS MY VERSION OF STACK USING NAMES TOP-BOTTOM **** */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.bottom) {
            this.bottom = newNode;
            this.top = this.bottom;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        return ++this.size;
    }

    pop() {
        if (!this.bottom) return null;
        let currentTop = this.top;
        if (this.top === this.bottom) {
            this.top = null;
        }
        this.top = this.top.next;
        this.size--;
        return currentTop.value;
    }
}
