class Stack {
    constructor() {
        this.stack = [];
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    push(value) {
        this.stack.push(value);
        return this;
        // returning "this" returns object.
        // returning "this.stack" returns array.
    }

    pop() {
        return this.stack.pop();
    }

    isEmpty() {
        return this.stack.length === 0 ? true : false;
    }
}
