class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    // I prefer building a constructor without first node value.
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = this.head.next;
        currentHead.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    set(index, value) {
        let nodeFound = this.get(index);
        if (nodeFound) {
            nodeFound.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) this.unshift(value);
        else if (index === this.length) this.push(value);
        else {
            let newNode = new Node(value);
            let prevNode = this.get(index - 1);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length++;
        }
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let prevNode = this.get(index - 1);
        let toRemove = prevNode.next;
        prevNode.next = toRemove.next;
        toRemove.next = null;
        this.length--;
        return toRemove;
    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let prev = null;
        let next = current.next;
        for (let i = 0; i < this.length; i++) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }
}
