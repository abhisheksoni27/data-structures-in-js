'use strict';

class Node {
    constructor(item, next) {
        this.data = item;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.next = null;
        this.start = 0;
        this.data = [];
    }
    insertNodeAtTheEnd(item) {
        let newNode = new Node(item, null);

    }
    deleteNode() {}
    display() {}
    isEmpty() {
        return this.start === 0;
    }
}