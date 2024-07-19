// Stacks
class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // next one down.
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0
    }

    peek() {
        // see the top node
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        // check if this is the very first item , top and bottom point to same node
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPointer;
    }

    // check stack is empty
    isEmpty() {
        //
    }

}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.peek(); // Discord
// Discord
// Udemy
// Google
myStack.pop(); // Discord // which is the holding pointer.
// Udemy
// Google
myStack.pop(); // Udemy // which is the holding pointer.
// Discord

