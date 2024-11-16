class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    traverse() {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            console.log(current.value);
            current = current.next;
        }
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let currentTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            currentTail.prev = null;
        }
        this.length--;
        return currentTail;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;
        let currentHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            currentHead.next = null;
        }
        this.length--;
        return currentHead;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let current = this.head;
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
        } else {
            current = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                current = current.prev;
            }
            return current;
        }
    }
}

let dll = new DoublyLinkedList();
dll.push(10);
dll.push(20);
dll.push(30);
dll.push(40);
dll.push(50);
dll.push(60);

console.log(dll.traverse());
for (let i = 1; i < 6; i++) {
    console.log(dll.get(i));
}
