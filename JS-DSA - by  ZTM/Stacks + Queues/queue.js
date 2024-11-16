class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        /* This is my solution. */
        // if (this.length === 0) return null;
        // let currentFirst = this.first;
        // this.first = this.first.next;
        // currentFirst.next = null;
        // this.length--;
        // if (this.length === 0) {
        //     this.first = null;
        //     this.last = null;
        // }
        // return currentFirst;

        if (!this.first) return null;
        const currentFirst = this.first;
        if (this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.length--;
        return this;
    }
}
