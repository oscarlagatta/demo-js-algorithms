// Doubly Linked Lists

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null, // new
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null, // new
        }
        newNode.prev = this.tail; // new
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head;
        this.head.prev = newNode; // new
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {
        // if (index === 0) {
        //     this.prepend(value);
        //     return this.printList();
        // }

        // check parameters
        // check the index is something we understand
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = {
            value: value,
            next: null,
            prev: null,
        }

        // we have two nodes that are connected, and we want to insert the new node
        // we then figure out which node is the first node.
        const leader = this.traverseToIndex(index - 1);

        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;

        this.length++;

        return this.printList();
    }

    traverseToIndex(index) {
        // check params

        let counter = 0;

        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            currentNode++;
        }

        return currentNode;
    }

    remove(index) {
        // check parameters

        const leader = this.traverseToIndex(index - 1);

        const unwantedNode = leader.next;

        leader.next = unwantedNode.next;

        // decrease length as we removed the node
        this.length--;
        return this.printList();
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

