class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BTS {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        let temp = this.root;
        if (newNode.value > temp.value) {
            
        }
    }

    lookup(value) {}

    // remove
}
