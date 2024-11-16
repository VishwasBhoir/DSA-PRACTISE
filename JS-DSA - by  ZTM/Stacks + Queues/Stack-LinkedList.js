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
        this.length = 0;
    }

    // See top element
    peek() {
        return this.top;
    }

    // add node top of the stack
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }

    // remove node on the top of the stack
    pop() {
        if (this.length === 0) return null;
        let currentTop = this.top;
        this.top = this.top.next;
        currentTop.next = null;
        this.length--;
        if (this.length === 0) {
            this.bottom = null;
        }
        return currentTop;
    }

    // Check wether the stack is empty or not
    isEmpty() {
        return this.length === 0 ? true : false;
    }
}
