class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    // constructor can be coded with or without value. when value is passed length should be start from 1.
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        current.next = null;
        //altername line: this.head = this.head.next
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // get Using for loop
    getFor(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current.next;
        }
        return current;
    }
    // never assign/change this.head's value directly, that will affect whole list, instead store this.head value in another variable and work on that.

    // get using while loop
    getWhile(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        let current = this.head;
        let counter = 0;
        while (counter < idx /* counter !== idx -> can be used too */) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(idx, value) {
        const nodeFound = this.getFor(idx);
        if (nodeFound) {
            nodeFound.value = value;
            return true;
        }
        return false;
    }

    insert(idx, value) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) this.unshift(value);
        else if (idx === this.length) this.push(value);
        else {
            let newNode = new Node(value);
            let prevNode = this.get(idx - 1);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length++;
        }
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();
        let prevNode = this.get(idx - 1);
        let nodeToRemoved = prevNode.next;
        prevNode.next = nodeToRemoved.next;
        nodeToRemoved.next = null;
        this.length--;
        return nodeToRemoved;
    }

    reverse() {
        /**** My Solution Before Watching Video. ****/
        // for (let i = 0, j = this.length - 1; i <= j; i++, j--) {
        //     let iNode = this.get(i);
        //     let jNode = this.get(j);
        //     [iNode.value, jNode.value] = [jNode.value, iNode.value];
        // }

        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let nextNode = current.next;
        let prevNode = null;
        for (let i = 0; i < this.length; i++) {
            nextNode = current.next;
            current.next = prevNode;
            prevNode = current;
            current = nextNode;
        }
        return this;
    }
}

const myList = new LinkedList();
myList.push(44);
myList.push(55);
myList.push(100);
myList.push(55);
myList.push(100);
myList.push(545);

myList.traverse();

myList.pop();
myList.traverse();
