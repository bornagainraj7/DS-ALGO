// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.insertAt(data, 0);
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst() {
        // return this.head;
        return this.getAt(0);
    }

    getLast() {
        return this.getAt(this.size() - 1);
        // if (!this.head) {
        //     return null;
        // }
        // let node = this.head;
        // while (node) {
        //     if (!node.next) {
        //         return node;
        //     }
        //     node = node.next;
        // }

        // Solution 2
        // while (node.next) {
        //     node = node.next;
        // }
        // return node;

    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.removeAt(0);
        // if (!this.head) {
        //     return;
        // }
        // this.head = this.head.next;
    }

    removeLast() {
        this.removeAt(this.size() - 1);
        // if (!this.head) {
        //     return;
        // }

        // if (!this.head.next) {
        //     this.head = null;
        //     return;
        // }

        // let prevNode = this.head;
        // let node = this.head.next;

        // while(node.next) {
        //     prevNode = node;
        //     node = node.next;
        // }
        // prevNode.next = null;
    }

    insertLast(data) {
        this.insertAt(data, this.size());
        // const last = this.getLast();

        // if (last) {
        //     last.next = new Node(data);
        // } else {
        //     this.head = new Node(data);
        // }
    }

    getAt(index) {

        if (index === 0) {
            return this.head;
        }

        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let prevNode = this.getAt(index - 1);
        if (!prevNode || !prevNode.next) {
            return;
        }
        prevNode.next = prevNode.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        let prevNode = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, prevNode.next);
        prevNode.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    } 

}

module.exports = { Node, LinkedList };
