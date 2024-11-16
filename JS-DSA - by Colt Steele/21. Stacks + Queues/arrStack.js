class Stack {
    constructor() {
        this.stack = [];
    }

    add(value) {
        return this.stack.push(value);
    }

    remove() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    clear() {
        this.stack = [];
    }
}
