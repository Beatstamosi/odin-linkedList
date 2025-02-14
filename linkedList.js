class Node {
    constructor(value=null) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.list = [];
    }

    append(value) {
        let lastElement = this.tail();
        let newElement = new Node(value);

        if (lastElement && lastElement.nextNode === 0) {
            lastElement.nextNode = newElement;
        }       

        this.list.push(newElement);
    }

    prepend(value) {
        let firstElement = this.list[0];
        let newElement = new Node(value);

        if (firstElement) {
            newElement.nextNode = firstElement;
        }

        this.list.unshift(newElement);
    }

    size() {
        return this.list.length;
    }

    head() {
        return this.list[0];
    }

    tail() {
        return this.list[this.list.length - 1];
    }

    atIndex(index) {
        return this.list[index];
    }

    pop() {
        this.list.pop();
    }

    contains(value) {
        return this.list.find((item) => item.value == value) !== undefined;
    }

    find(value) {
        let index = this.list.findIndex((item) => item.value == value);

        return index == -1 ? null : index;
    }

    toString() {
        let string = this.list.map(item => `( ${item.value} )`);
        string.push("null");

        return string.join(" -> ");
    }

    insertAt(value, index) {
        let currentNode = this.list[index];
        let previousNode = this.list[index - 1];
        let newNode = new Node(value);
        newNode.nextNode = currentNode;

        if (previousNode) previousNode.nextNode = newNode;

        this.list.splice(index, 0, newNode);
    }

    removeAt(index) {
        let previousNode = this.list[index - 1];
        let nextNode = this.list[index + 1];

        if (previousNode) {
            previousNode.nextNode = nextNode ? nextNode : null;
        }

        this.list.splice(index, 1);
    }
}