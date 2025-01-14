class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
 
class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) return undefined;
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    /***** My Code *****/
    // contains(value) {
    //     if (!this.root) return false;
    //     let temp = this.root;
    //     while (true) {
    //         if (temp.value === value) return true;
    //         if (value < temp.value) {
    //             if (temp.left === null) return false;
    //             temp = temp.left;
    //         } else {
    //             if (temp.right === null) return false;
    //             temp = temp.right;
    //         }
    //     }
    // }

    constains(value) {
        if (!this.root) return false;
        let temp = this.root;
        while (temp) {
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                return true;
            }
        }
        return false;
    }

    minValueNode(currentNode) {
        while (currentNode.left != null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }
    // Need to pass "this.root" as argument.
}

const myBST = new BST();
console.log(myBST);
myBST.insert(47);
myBST.insert(76);
myBST.insert(52);
myBST.insert(82);
myBST.insert(47);
